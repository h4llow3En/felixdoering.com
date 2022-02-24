---
layout: post
title:  "Everything new"
date:   2016-04-14 10:54:40+01:00
show_social: true
teaser: |
  I wanted to have a more serious design the old one was just the standard Jekyll theme with some minor changes. It just was unready...
tags: rebrush, telegram bot, tdo, todo list
description: description.everything_new
---
## Everything has a new look

Well, at least almost. I am still the same, but my page got a new design and I decided to make my posts in English.  

Why?  
There are several reasons. First of all I wanted to have a more serious design the old one was just the standard Jekyll theme with some minor changes.
It just was unready. The colors didn't match and all in all there was no personal style at all.  
And why in English?  
I write my programs (almost) in English and I think it is a much cleaner look if I just do everything in the same language. Maybe I will translate my old posts, but I am not sure yet. I started and tried to translate the first ones, but then I thought it might be not a problem to see the beginnings of my blog (well, the second attempt).

That's about everything to this new page. I will continue to improve it piece by piece. For example the ‘About’ page is empty yet. This needs to be changed soon.  
But I want to write a bit about my recent projects, too, not just the redesign of felixdoering.com:

## I am talking to you

If you know the messenger Telegram you probably know that you can use bots as well. [Felix](https://dummyco.de) and I have written the IAmTalkingToYou Bot. But what does it do? If anyone mentions a person the bot will recognize this and send a mention to this person as well.  
A new, yesterday implemented feature is if you write ’+1’ the bot will reply to this as well with ’\<username of sender\> gefällt das.’ or in case of ’-1’ ’\<username of sender\> gefällt das nicht.’ Yes this bot replies in German but hopefully sometime we will offer an English version as well.  
While testing the new feature Felix has written a ‘+2’.  
Why not let people like this just more than once? I updated the feature and from now on you can write ‘+\<x\>’ and you will get this reply: ‘\<username of sender\> gefällt das \<x\>-fach.’

## tdo - the TODO list for the terminal

There is another, a much bigger project, Felix and I worked on. It is called ‘tdo’. Felix wanted a simple tool for the command line to manage TODO’s and we started coding. At this point we have many features implemented and published a release on pypi. It was finished. Yes, it **was**…

While working as a tutor on my university I showed this tool to one of my co-tutors and he asked if he will get a notification if a TODO is open for a long time. This gave Felix and me the idea to make it even better. Because of this we made plans for a new project: _tdo-server_

When it is finished, this should be an online version of the command line tool with syncing features. But it is in really early dev and we haven’t completely decided if we really want to use Python as our language of choice or if we try some new e.g. rust.
