---
layout: post
title: Automated is better
date: 2015-05-03 20:03:00
description: description.automated_is_better
show_social: true
teaser: |
  Yesterday evening I found a bug in my traffic plugin for the dormitory internet in the display of the traffic still available. So I set to work to fix it as quickly as possible so...
---

Yesterday evening I found a bug in my traffic plugin for the dormitory internet in the display of the traffic still available. So I set to work to fix it as quickly as possible so that it can be used reliably again.

Apart from myself, I only know two people who use this tool, [Justus](https://github.com/JustusAdam "External link: Profile of Justus Adam on Github"){:target="_blank"} and [Kilian](https://github.com/kiliankoe "External link: Profile of Kilian Költzsch on Github"){:target="_blank"}. So I also contacted both of them that I have released a new version.
Just for fun, Justus brought up the idea that an autoupdater could be included in the next version. I have to admit that idea had crossed my mind before, because it's pretty much the only way to distribute updates to a wider audience.

My first idea was to make a request to the Github API every minute, similar to retrieving the traffic, to see what the latest release is. However, that would have been quite a back and forth. Thanks to Kilian I found a nice framework, [Sparkle](http://sparkle-project.org "External link: Sparkle project website"){:target="_blank"}, which makes it relatively easy to distribute updates.

As is always the case when you don't know what you're talking about, it was quite complicated to read this manual, especially if you've never really worked with frameworks in XCode before, like I have. In the end, however, I got it right.

For those who also want to use this framework, here is a little tip:
By default, Sparke always checks __CFBundleVersion__ as the version number, which in XCode is the __Build__ and *not* the version.
