Recently I have been working on my 3D editor [Realmforge](https://realmforge.vercel.app/) and I thought to myself, why not create a **Plugin System**? How hard can this be? You see I originally created the Realmforge Editor for my game [Arcadian Realms Online](https://arcadianrealms.vercel.app) (which is a work in progress...) to help me create the game world.

![Realmforge Editor](/blog-assets/realmforge.png)

However I was faced with a conflict:

On one hand I wanted to make the editor as specific as I can to my usecase - making my game, but at the same time, there was a part of me that wanted to publish my editor for others to use - and if the editor was too specific, it would have been hard for general use...

And so I thought to myself, why not make a **Plugin System**?

## The Goal

So let's define what exactly I mean by a **Plugin System**:

I essentially wanted a system that could:

- Be installed and uninstalled
- Add new features to the editor
- Was safe from cross site scripting

Essentially I wanted to create something similar to _Wordpress Plugins_ and _VSCode Extensions_

![Vscode Extensions](/blog-assets/vscode-extensions.png)

## Attempt 1: Using Javascript webworkers

My first thought was to use _Javascript webworkers_.

Javascript webworkers allow a webpage to run javascript in the background, away from the main thread.

```js
// Inside main webpage
const worker = new Worker("./my-plugin.js");
```

Communicating from the webworker to the main thread and vice-versa was also fairly simple.

### Sending and receiving data from main webpage

```js
// Sending data to webworker
worker.postMessage({ event: "myEvent", data: "Hello!" });

// Receiving data from the webworker
worker.onmessage = (e) => {
  const data = e.data;
  console.log(data);
};
```

### Receiving and sending data from webworker

```js
// onmessage is a global variable
// that can be set inside the webworker
// to receive data from the main script
onmessage = (e) => {
  console.log("Data from main script");
  const data = e.data;
  console.log(data);

  // Send data to main thread
  postMessage("from webworker");
};
```

By making each plugin a webworker, I could load plugins dynamically and implement plugin hooks and methods.

### In the main application

```ts
class PluginSystem {
  private pluginMap: {
    [pluginUrl: string]: Worker;
  } = {};

  installPlugin(pluginUrl: string) {
    const worker = new Worker(pluginUrl);
    worker.onmessage = (e: any) => {
      this.onPluginEvent(pluginUrl, e.data);
    };
    this.pluginMap[pluginUrl] = worker;
  }

  uninstallPlugin(pluginUrl: string) {
    const worker = this.pluginMap[pluginUrl];
    if (worker) {
      worker.terminate();
      delete this.pluginMap[pluginUrl];
    }
  }

  sendPluginEvent(pluginUrl: string, event: any) {
    this.pluginMap[pluginUrl]?.postMessage(event);
  }

  onPluginEvent(pluginUrl: string, event: any) {
    // Do whatever we want here when
    // a plugin sends us some data
  }
}
```

### In each webworker

```ts
class Plugin {
  init() {
    onmessage = (e: any) => {
      this.onEvent(e);
    };
  }

  onEvent(event: any) {
    // Do whatever we want here
  }

  sendEvent(event: any) {
    postMessage(event);
  }
}
```

## But wait ... there's a few problems

![reaction](/blog-assets/think.jpg)

Well for starters according to this [stack overflow post](https://stackoverflow.com/questions/13574158/number-of-web-workers-limit) browsers have a limit to the number of webworkers they can load.

This does depend per browser but this limitation means that there is only a certain amount of plugins this system can handle before it stops working.

### But even worse ...

Webworkers are **not sandboxed...**

According to [another stack overflow post](https://stackoverflow.com/questions/16600607/are-web-workers-a-secure-way-to-sandbox-untrusted-javascript-code) webworkers have access to same origin stuff such as **IndexedDB** which was what I was using to cache assets and the project data for my editor.

Webworkers were never designed to run untrusted code but rather just a way for heavy tasks to be run in the background.

This meant that if I used webworkers to implement a plugin system I would compromise the security of the system if I installed a malicious plugin.

## A Better Solution ... Using iframes

![iframe](/blog-assets/iframe.png)

Well you may ask - what can we do then? Well our browser actually already has a built in method to run untrusted code.

Introducing ... _the iframe_

An iframe is a HTMLElement that allows us to embed another site onto our page. It is what allows websites to embed youtube videos into their page.

```html
<iframe src="./my-plugin.html" title="plugin"></iframe>
```

Even better, iframes have a sandbox property that places extra security measures onto the loaded webpage - which is perfect for our usecase! We can now load our plugins safely without fear!

```html
<iframe src="./my-plugin.html" title="plugin" sandbox></iframe>
```

### Our updated installation code

```ts
// Inside PluginSystem on main application
installPlugin(pluginUrl: string) {
  // Create IFrame
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = pluginUrl;
  iframe.sandbox.add("allow-scripts");
  this.pluginMap[pluginUrl] = iframe;
  document.body.appendChild(iframe);
  this.pluginMap[pluginUrl] = iframe;
}
```

Now notice that we have add the iframe to the document

```ts
document.body.appendChild(iframe);
```

The reason for this is because an iframe does not load its target webpage when you call `document.createElement("iframe")`. It's only loaded when it first enters the DOM. Now since we don't want the iframe to actually affect the view of our core application, we can set the `display = "none"`

And so our uninstallation code would simply be removing the iframe

```ts
uninstallPlugin(pluginUrl: string) {
  const iframe = this.pluginMap[pluginUrl];
  if (iframe) {
    document.body.removeChild(iframe);
    delete this.pluginMap[pluginUrl];
  }
}
```

Now since an iframe loads html instead of javascript we would have to update our plugin code to something like this:

```html
<html>
  <script>
    const myPlugin = new MyPlugin();
    // Do whatever things your plugin wants
  </script>
</html>
```

### Communicating with iframes

We can communicate with iframes in a similar way to the method we used for the webworkers solution.

```ts
// Sending event to iframe
sendPluginEvent(pluginUrl: string, event: any) {
  const iframe = this.pluginMap[pluginUrl];
  if (iframe) {
    iframe.contentWindow?.postMessage(event, "*");
  }
}
```

From the iframe side we need to make some slight changes

```ts
window.onmessage = (e: any) => {
  const data = e.data;
  // Handle event here
};
```

Now listening to the iframe events from the main editor is a bit trickier as the `HTMLIFrameElement` does not have an onmessage callback

```ts
// This would have a compile error since onmessage doesn't exist on HTMLIFrameElement
iframe.onmessage = (e: any) => {
  console.log(e.data);
};
```

Instead we have to listen to iframe events from the **window object** in the main application.

```ts
window.onmessage = (message: any) {
  // Find which iframe we received the message from
  for (const [pluginUrl, iframe] of Object.entries(this.pluginMap)) {
    if (message.source === iframe.contentWindow) {
      this.onPluginEvent(pluginUrl, message.data)
    }
  }
}
```

Now with these changes, we can implement a plugin system that is **secure** and **dynamic**.

## In Conclusion...

Overall, building a plugin system for my editor [Realmforge](https://realmforge.vercel.app/) was a massive learning experience.

It definitely was harder than I thought but also extremely satisfying once it all clicked.

Thank you for reading!
