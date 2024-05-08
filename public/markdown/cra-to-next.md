This weekend I had made the journey of migrating my create-react-app website to Next.JS after a long time of resistance. (This very website you are reading this blog on - pretty meta I know ).

## Why did I stick with CRA for so long?

You may ask - Ashley, why did you even stick with Create React App for so long? Wasn't this deprecated long ago and isn't Next.JS the future of react?

True, I agree -

But there was a part of me that didn't want to abandon Create React App because it was just so simple to get started. If I wanted a quick way to write react code and not worry about other issues such as server side rendering, hydration, and etc - it's really hard to find something as simple to get started as CRA.

I had thought to myself, I'm just going to make a simple one page portfolio website, create react app is more than sufficient to get the job done.

Moreover, perhaps I had also attached sentimental value to Create React App as it was what I used when I learnt about frontend frameworks for the first time in university.

And to be honest, Create React App had done the job for the earlier stages of my website.

## A moving goalpost

![Moving goalpost](/blog-assets/moving-goalposts.jpg)

So - if I was satisfied with CRA, why did I migrate to Next.JS?

Well, like many other projects - the goalposts move.

What I first thought was just going to be a portfolio website has slowly transformed into a blog.

### Why not just use react router dom?

At first I thought to myself, I could just use react router dom to generate the blog pages!

```ts
const router = createBrowserRouter([
  {
    path: "/blog/:blogId",
    element: <BlogPage />,
  },
]);
```

_True_, this worked for a bit - but then we run into the **fundamental problem of single page applications** - the fact that they are _single paged._

This means that loading my website would require loading _all my blog pages_ at once. Now obviously this is not scalable.

### Why not load blog content dynamically?

Well then I thought, why not load the blog content dynamically?

If my blogs were written in markdown and fetched on page load, that would prevent the need of fetching all the blogs at once for single page application

```ts
useEffect(() => {
  (async () => {
    const resp = await fetch(`/${blogId}.md`);
    const markdown = await resp.text();
    setMarkdown(markdown);
  })();
}, [blogId]);
```

And this worked quite well!

_... or so I thought_.

## Introducing SEO

![search engines](/blog-assets/search-engines.jpeg)

Search Engine Optimization (SEO) is the process by which one increases the visibility of a website to search engines. This is normally done through optimizing page performance, improving accesibility, and having the correct meta tags.

Moreover, a good way to bump your websites SEO is including **Open Graph Tags** which makes you webpage easier to share on social media.

Now since I used Create React App - here was my problem:

**I could not set the meta tags dynamically**

Why?

Couldn't I just set the document title, and tags when my page loads in Create React App as follows?

```ts
useEffect(() => {
  document.title = "My Blog Title";
}, []);
```

Well you see, although this does in fact change the document title, when you share a link, the scraper scraping your website is not going to wait for your react code to run. It's just going to get whatever is the first document title that it sees.

And so if we were to set the document title and other meta tags on client side, scrapers would essentially ignore it.

The only way to get around this is to server side render the page.

## NextJS to the rescue

At this point I had surrendered.

NextJS was in fact the tool for the job if I wanted to server side render my blog pages so that the tags show up properly when sharing my blogs.

And so that's what I spent my weekend doing.

By using NextJS's **getStaticPaths** and **getStaticProps**, I was able to statically render mmy blog pages on build time, meaning the title and tags will finally share correctly.

What a journey.

```ts
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: BLOGS.map((blog) => ({
      params: {
        blogId: blog.id,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blog = BLOGS.find((blog) => blog.id === context.params?.blogId);
  let markdown: string | undefined;
  if (blog) {
    const blogPath = path.join(process.cwd(), `public`, blog.markdownSrc);
    markdown = await fs.readFile(blogPath, "utf8");
  }

  return {
    props: {
      blog,
      markdown,
    },
  };
};

export default function BlogPage({
  blog,
  markdown,
}: {
  blog: Blog | undefined;
  markdown: string | undefined;
}) {
  if (!blog || !markdown) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Head>
        <title>{blog?.title ?? "Blog"}</title>
        <meta name="description" content={blog.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={blog.thumbnailSrc} />
        <meta property="og:type" content="blog" />
        <meta
          property="og:url"
          content={`https://www.ashleycheung.com/blog/${blog.id}`}
        />
        <meta property="og:title" content={blog.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ashleycheung.com" />
        <meta
          property="twitter:url"
          content={`https://www.ashleycheung.com/blog/${blog.id}`}
        />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={blog.thumbnailSrc} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <BlogComponent blog={blog} markdown={markdown} />
      </main>
    </>
  );
}
```
