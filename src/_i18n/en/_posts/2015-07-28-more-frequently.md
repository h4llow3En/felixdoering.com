---
layout: post
title: More frequently
date: 2015-07-28 13:30:02
show_social: true
teaser: |
  Wow, that didn't hold up so well for me after all. Actually, I wanted to write a little more than I did the last time I tried to run a blog...
tags: thermometer 
description: description.more_frequently
---


Wow, that didn't hold up so well for me after all. Actually, I wanted to write a little more than I did the last time I tried to run a blog...
Apparently, I lost sight of it again at some point. Ok, so it's time to write a post again, but where should I start?

I've been writing a bit more recently on my "weather station", which is made up of a Raspberry Pi Model B, a 20x4 character HD44780 LCD display and a DHT22 temperature sensor. Initially, all the pins I used were written into the code and I had the control of the display as a module. Furthermore, the DHT22 was addressed with the help of a shell script, which then wrote to a file that was eventually read out by the Python script, but this was very messy.

Now, after ages, I have taken up the task again and have written an extra class for the display. Unfortunately, I couldn't test it at the moment because I couldn't control the display after a few tests, but I'll do that soon! I will also add a detailed description.

The sensor is now also controlled directly by the Python script, as I found a library for it directly from adafruit. Unfortunately, it is also due to the communication between the Raspberry Pi and the DHT22 that sometimes no data is received despite everything configured correctly. I have to find a way to work around this problem so that the script is not terminated. At the moment I have implemented a solution, but that is more of a hardship than a solution, it can be done much more elegantly...

However, you don't have to lift a finger to install Adafruit's library, because if it's not there, the script will install it by itself.
