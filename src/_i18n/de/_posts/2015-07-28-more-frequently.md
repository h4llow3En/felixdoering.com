---
layout: post
title: Das ist häufiger
date: 2015-07-28 13:30:02
show_social: true
teaser: |
  Wow, das hat sich ja bei mir doch nicht so gut gehalten. Eigentlich wollte ich doch etwas mehr schreiben, als bei meinem letzten Versuch einen Blog zu führen...
tags: thermometer 
description: description.more_frequently
---


Wow, das hat sich ja bei mir doch nicht so gut gehalten. Eigentlich wollte ich doch etwas mehr schreiben als bei meinem letzten Versuch, einen Blog zu führen...
Anscheinend habe ich den dann doch irgendwann wieder ein bisschen aus den Augen verloren. Ok, es ist also wieder mal Zeit, einen Beitrag zu schreiben, doch wo soll ich anfangen?

Ich habe in der kürzlich etwas weiter an meiner "Wetterstation" geschrieben, welche sich aus einem Raspberry Pi Model B, einem 20x4 Zeichen HD44780 LCD-Display und einem DHT22-Temperatursensor zusammensetzt. Anfangs waren alle verwendeten Pins von mir fest in den Code reingeschrieben und ich hatte die Ansteuerung des Displays als ein Modul gehabt. Des Weitern wurde der DHT22 mithilfe eines Shell-Scripts angesprochen, welches dann in eine Datei geschrieben hat, die dann vom Python-Script letztendlich ausgelesen wurde, jedoch war das sehr unschön.

Jetzt habe ich mich nach Ewigkeiten mal wieder drangesetzt und habe eine extra Klasse für das Display geschrieben. Die konnte ich leider im Moment noch nicht testen, weil ich irgendwie nach einigen Tests das Display gar nicht mehr ansteuern konnte, aber das wird noch schnell nachgeholt! Außerdem werde ich auch noch eine ausführliche Beschreibung hinzufügen.

Auch der Sensor wird jetzt direkt durch das Python-Script angesteuert, da ich von adafruit direkt eine Bibliothek dafür gefunden habe. Leider liegt es zusätzlich auch noch an der Kommunikation zwischen Raspberry Pi und DHT22, dass trotz allem manchmal einfach keine Daten empfangen werden. Ich muss mich irgendwie noch mal darum kümmern, dass ich das auch noch gelöst bekomme, dass das Script dadurch nicht beendet wird. Momentan habe ich eine Lösung implementiert, aber das ist doch eher mehr Not als Lösung, das geht noch wesentlich eleganter...

Um die Bibliothek von Adafruit zu installieren, muss man aber keinen Finger krümmen, denn falls sie nicht vorhanden ist, installiert das Script diese von selbst.
