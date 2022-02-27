---
layout: post
title: Things about Search Engine Optimization (SEO)
date:   2022-02-27 18:45:00
images:
  - file: posts/seo/pagespeed.png
    alt: Screenshot Pagespeed Dev-Tools
    description: images.pagespeed
  - file: posts/seo/search-preview.png
    alt: Screenshot of this pages searchresults in DuckDuckGo
    description: images.searchpreview
description: description.about-seo
show_social: true
teaser: |
  SEO, short for "Search Engine Optimisation", is at the same time a great but also a difficult thing. It is the process...
---

## What is SEO?

SEO, short for "Search Engine Optimisation", is at the same time a great but also a difficult thing.

> \[It\] is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.  
> <cite>-- Source: [Wikipedia](https://en.wikipedia.org/wiki/Search_engine_optimization)</cite>

Above all, SEO refers to unpaid traffic of websites, i.e. appearing as high as possible in search results without (regularly) spending money on it.  
Besides the content, which I will discuss later, the general performance of the page is very important. How and when is the CSS loaded, do elements block the page layout, how quickly does the server respond. All these things and more need to be considered if you want to improve your SEO.  
Googles [PageSpeed Insights](http://pagespeed.web.dev/) are a good way to get an overview of how they rate the performance of your pages. If it was only about that, I would have been done with SEO because of rating of 99 on desktop and 100 on mobile devices.

## Content matters

Content is likewise a very important point for me to optimise. The more content and sub pages a website has, the more can be indexed by search engines. And the larger the index, the better the ranking. If relatively similar content is present on several pages, this again hurts the ranking. Google says the following about duplicate content:

> Google tries hard to index and show pages with distinct information.
> <cite>-- Source: [Google](https://developers.google.com/search/docs/advanced/guidelines/duplicate-content?hl=en&visit_id=637810316108825221-1174314324&rd=1)</cite>

So, in the broadest sense, this blog post with my experience of SEO optimisation leads to more content on my site and therefore a better chance of being displayed higher up in the search results.

## Not only text is content

Search engines are not only interested in the text of a page, but also in meta information. Strictly speaking, this is also text, but it is not displayed directly on the page itself. For example, the `<title>` is also used in the browser as a caption for the tab, but mainly by search engines together with the `<meta name="description">` and for some also the favicon to be displayed in the search results. Keywords, while still recommended, are no longer considered in most indexes due to misuse. Instead, the most important keywords of the text should be found in the title and the URL.  
For sharing the website in social networks, Facebook and Twitter have also added their own meta information ([Open Graph protocol](https://ogp.me) and [Twitter cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup)). These enrich the preview with additional information when sharing on the respective platforms. SEO rewards these efforts of the website operator. The same goes for embedded functions that allow sharing directly from the page. On my website, however, I wanted to renounce all sharing features.

## The link to a page

The URL of a post or page should contain keywords that are also found in the text and title. URLs should neither contain any filler words nor exceed a certain length. This way, `/blog/things-about-seo` gets a better SEO rating than a full sentence, for example (`/blog/things-i-learned-about-seo`), even if it would make it easier for the end user to understand that this is a experience report and not a tutorial. The trick is to make URLs "speaking" enough without overloading them.  

Jekyll generates, if configured, a `index.html` for each Markdown file which is stored in a folder structure representing the URL. If you now link to this page, it works with and without an attached `/index.html`, because my Nginx always searches for this file in a directory. For Google and other search engines, however, these are two separate locations. So that the page is not seen as duplicate content, it is important to add a `rel="canonical"` to the `<a>` tag when linking to it. This indikates that this is only a single location.

## It has to look good on mobile

Who does not have them, the friends to whom you send a link and not two minutes later you get a reply like: "It's really not suitable for mobile". Annoying when you just want to show them something, but actually correct. Nowadays, websites are viewed much more frequently on mobile devices such as phones and tablets. Therefore, Google is also very interested in the so-called mobile responsiveness when evaluating a page.

## Conclusions

By design, Jekyll does not really contribute much to SEO. There is a plugin that inserts the most important meta information, but everything else is up to the user. However, I have found for myself that all these optimisations, and a few more not listed here, are slow to have an effect. A great SEO result does not automatically equate to an immediate good rank in the search results. If, on the other hand, the SEO deteriorates, for example due to the omission of a page that is still present in the search engines' index, however, an immediate downgrading follows.
