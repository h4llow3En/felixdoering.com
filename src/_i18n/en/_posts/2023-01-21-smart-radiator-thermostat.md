---
layout: post
title: How smart a radiator thermostat can be
date:   2023-01-21 15:45:00
last_modified_at: 2023-01-22 12:00:00
description: description.smart_radiator_thermostat
show_social: true
teaser: |
  Apart from the fact that I wanted to make my home smarter bit by bit for some time now, the current rise in energy costs gave me one more reason to...
---

## The reason

Apart from the fact that I wanted to make my home smarter bit by bit for some time now, the current rise in energy costs gave me one more reason to replace the thermostats of the radiators in my flat with smart versions. The ability to control the temperature of my home by means of set schedules, via an app or depending on my presence not only increases comfort, but also reduces heating costs.  
Nevertheless, which thermostats should I choose? And why are there such incredibly wide price ranges?

## The purchase decision

At the beginning of December 2022, I made up my mind to get new and smart heating thermostats. I drew up a list of minimum requirements to reduce the large number of products somewhat. My main concerns were that they were compatible with Apple HomeKit and, above all, reliable. There are enough products whose reviews report constant communication loss despite a short distance to the bridge.  
In the end, the decision was made in favour of a system from tado°, as the devices are relatively small and unobtrusive. One slight drawback, however, is that some of the "premium" features of the app require a monthly subscription. Among other things, the absence detection and automatic switching of the radiators are just some of those functions. If you don't want to pay €3 a month for this, you will only be informed via push notifications if the system has detected an open window or that no person is present. As with most smart home devices, presence detection is realised via [geofencing](https://en.wikipedia.org/wiki/Geo-fence). Registered smart phones send their GPS coordinates and get checked whether they are within a virtually 'fenced' area.

## The not so smart thermostat

The truth is: I would have run into pretty much the same problems if I would have chosen a different thermostat. Sooner or later, you always come up against the limits of the devices. In my case, the temperature that the thermostats measure near the radiators is often much higher than the actual temperature in the middle of the room, so they don't continue heating even though the target temperature hasn't been reached yet. Geofencing via tado itself also consumes an incredible amount of battery charge. On top of that, this kind of notification function is very likely designed in such a way that at some point you no longer want to use it and simply would pay. A solution was needed, and one that does not incur any ongoing costs.

## An assistant for home and heating

Software developers are generally too proud to pay money for functions that they could build themselves. I felt the same way, because I was tired of manually switching the heating to "away" and back to "home". In that case I could have kept the previous thermostats. Fortunately, there is open source software that helps you gain some control and unification over all the manufacturers with their own cloud, bridge and proprietary protocols. My choice fell on [Home Assistant](https://www.home-assistant.io).  
Once integrated into Home Assistant, the tado devices provide all the data that they also make available to the app. This includes the open window detection, which would normally only trigger a notification. Only the location data or the information whether registered devices are in the vicinity are not provided. Fortunately, Home Assistant can do this on its own, without the need for a cloud. Everything is evaluated locally.  
So I set up an automation that tells tado to switch the heating to "away" mode as soon as there is no device nearby and revoked the tado app's permission to use location data. Suddenly, my battery lasts much longer again. It also reacts to open windows registered by tado and sets the heating to a lower temperature for this time, just like in the premium functions.

## It is still too cold

It is possible to set an offset to compensate for the temperature difference between the room and the radiator. Nevertheless, in my case this has always been very variable between 1 and 3 Kelvin. So often it was still relatively cold in the room, but the thermostat thought it was already just below 26 °C. Unfortunately, you cannot tell tado the actual room temperature directly. One option is to purchase the additional thermometer from tado itself, which costs a little more than the actual radiator thermostat. Alternatively, you can go back to Home Assistant and integrate much cheaper temperature sensors, with the help of which the offset is ultimately updated dynamically via an automation. At this point, the disadvantage of evaluating all data in the cloud without any external context becomes apparent once again. Because of manually adjusting the room temperature using the offset, tado believes it has detected an open window, which only leads to false positive results. So I deactivated this detection and use door and window opening sensors, which not only react reliably, but also immediately, and not only after a drop in temperature.

## Conclusion

Now everything heats according to my wishes, even if I had to buy some additional sensors. In the end, the additional investment is one-off and also cheaper than being completely locked into the tado universe.  
If you ask me whether I regret my decision to choose this manufacturer, my answer is: No, not really. As mentioned before, every product has its own peculiarities and with other manufacturers my hands would have been tied even more in some cases. Nevertheless, I am happy when new standards like [Matter](https://en.wikipedia.org/wiki/Matter_(standard)) are introduced, which allow devices to be operated exclusively locally and also independent of manufacturers. Theoretically, there are already some wireless standards like Zigbee or Z-Wave for this, but do manufacturers still have the possibility to restrict functionalities enormously here - Yes, I'm talking about Philips Hue, whose hub does speak Zigbee, but only in the Light Link protocol. If a company pays to be included in the "Friends of Hue" programme, strangely enough, their temperature sensors can also be integrated.