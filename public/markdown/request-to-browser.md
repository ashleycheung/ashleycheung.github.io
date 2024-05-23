Have you ever wondered, when you go to a website such as **www.youtube.com**, how your computer knows which server on the internet to connect to?

Or perhaps for the _more tech savy readers_, have you ever wondered why changing your website's domain name can take up to 48 hours to update?

The answer to both of these questions is a system which arguably is a cornerstone of the internet - the Domain Name System (DNS)

## What is DNS?

![Phone Contacts](/blog-assets/phone-contacts.webp)

The Domain Name System (DNS) is like the phone contacts for the internet. In our phone contacts we like to store people's names which are mapped to their phone numbers. No one really remember people's phone numbers nowadays but we would just look for that persons contacts.

In the same way, we humans like to remember websites through urls, something like **www.ashleycheung.com** or **www.google.com** - however computers, interact through **ip addresses** like **192.168.1.1**.

And so, DNS provides a system that allows your computer to figure out when you type **www.youtube.com** - which ip address it should be fetching the webpage from.

But how does the DNS all work?

## The Journey of DNS Request

Imagine with me, that one day you want to go to **www.youtube.com**. What happens?

Well the first stage is that your computer is going to send this url to your Internet Service Provider (ISP) and ask it to give you the url's IP Address.

![DNS Step 1](/blog-assets/dns_step_1.png)

Now if your Internet Service Provider already has the mapping of **www.youtube.com** mapped to its ip address (lets say 208.65.153.251) cached then it can return it instantly to your computer. However for our example, we are going to pretend that the ISP does not have that mapping cached.

In this case then, your ISP will have to find out the ip address of youtube through a **Recursive Resolver**.

Now the recursive resolver is going to first ask the **Root Name Server**.

![DNS Step 2](/blog-assets/dns_step_2.png)

Now the root name server won't have the ip address of your url but instead it stores the ip addresses of all the Top Level Domain Name Servers. These TLD Name Servers each look after a top level domain such as **.com** or **.app** or **.io**. This ip address will be returned to the recursive resolver.

![DNS Step 3](/blog-assets/dns_step_3.png)

On our next step, the recursive resolver is going to ask the TLD Name Server for the ip address of **www.youtube.com**. Now the TLD Name Server is going to return the ip address of the **Authoritative Name Server** that looks after the given domain.

![DNS Step 4](/blog-assets/dns_step_4.png)

With the ip address of the Authoritative Name Server that looks after **youtube.com**, our recursive resolver is going to ask it for the ip address, in which it responds with the ip address of **www.youtube.com**.

![DNS Step 5](/blog-assets/dns_step_5.png)

And at long last, our computer knows which ip address to visit to find our webpage for **www.youtube.com**.

## DNS Cache

Now in order to speed up this process, if your laptop has already visited **www.youtube.com** before, it already knows its ip address and so it would be wasteful to go through the whole DNS process again. Instead, this mapping is stored locally on your computer as cache so that it can instantly visit the ip address of youtube.

There also exists this cache on your ISP in order to speed up DNS requests if many of its users are also requesting the same website.

## Cache - a double edged sword

Whilst caching urls to ip addresses definitely speeds up the DNS lookup process - it's mean that if were to change the domain name to point to a new server, the cache stored on people's machines or in ISP's would still be the old one.

This would mean we would have to wait for the cache to expire before our new changes are updated. And so that's why updating domain names can take up to 48 hours to take effect.

## Conclusion

Overall, DNS is a wonderful cornerstone of the internet and one blog post is not enough to cover all its intricacies - and this post does not attempt to do that. However what I do hope is that it provided a high levelled simplified glimpse into how the DNS works.

Thank you for reading!
