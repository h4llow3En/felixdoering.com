---
layout: post
title: The never-ending weather station project
date:   2022-03-16 14:30:00
description: description.never_ending_weather_station
show_social: true
teaser: |
  Over the course of the now almost seven years, I have returned to my weather station project from time to time. No matter whether it was a refresh...
---

## The beginnings

I first wrote about a weather station in a blog article in July 2015. At the time, it consisted of a Raspberry Pi, a DTH22 and a LCD display. Everything was thrown together in a very rudimentary way with a script that crashed regularly. Also, the term weather station may have been a bit exaggerated. A sensor that can measure temperature and humidity and a display that only shows these live values is still a thermometer.  
But that's how my long journey of "weather stations" began back then in my dormitory room.

## What has happened so far

Over the course of the now almost seven years, I have returned to this project from time to time. Be it a refresh of the original project or a new attempt in another programming language. A completely new turn of events occurred on my birthday three years ago. I received a box that contained a BMP280 (for air pressure), an MQ135 (gas sensor) and the DHT22 I already knew. Also, the whole project should no longer run on a Raspberry Pi, but on the ESP8266, a microcontroller similar to the Arduino with integrated WIFI. Actually a nice new playground for a hobbyist like me. I put everything together and wrote a bit of software for it. That was also the moment when I discovered [PlatformIO](https://platformio.org "External Link: PlatformIO project website") for myself.  

The components assembled on a breadboard were relatively unstable and I had also watched a tutorial on PCB prototyping shortly before. So the logical next step for me was to create my own PCB, which provided a socket for the ESP and connections for the three sensors. The end result, in my opinion, finally deserved the title "weather station". But then the big plans came: What if I distributed several of these stations in the apartment? And what if they all send the current data to my server? For that, I would need an API and, ideally, a small configuration option on the devices themselves. And when all this is finished at some point, I can tackle a third project, a display that shows me all gathered values in a nice format.  

After experimenting with the hardware for a while, I decided to upgrade. The ESP8266 had to give way to an ESP32, which had more memory and processing power. Unfortunately, I lost my old project files for the PCB, so I made it again with the updated components. No difference really, just the better microprocessor.

## All good things come in threes

Again, some time had passed and in the meantime I had done some work on SMD soldering and further expanded my knowledge of circuit board design through tutorials. For SMD soldering, the components are not pushed through the PCB as it is usual in the hobby sector, but are designed in a way that they are only attached to the surface.  
I was wondering what sensors are really useful for monitoring and recording temperature, humidity and air pressure. All three values can be measured with a Bosch BME280. Theoretically, this is also available prefabricated on a circuit board, which could simply be connected to the ESP via simple plug connection. The point is, I like to complicate things and maybe I'm using this project as a bit of an excuse to try my hand at new things. So I looked around for schematics of ESP32 development boards and found what I was looking for at Adafruit. At this point, a big thank you to the developers at Adafruit, who make almost their entire products, including the schematic drawings and PCB files, available as open source! This really helped me a lot to get inspiration for my own design. So I put together a PCB that contains an ESP32 as well as a BME280 and can be operated either via USB-C, battery or DC plug.  
I haven't found the time yet to actually populate the PCBs with the components, but hopefully that will happen very soon. I am curious to see in which direction this project will develop.
