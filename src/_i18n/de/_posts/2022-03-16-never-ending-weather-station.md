---
layout: post
title: Das niemals endende Projekt der Wetterstation
date:   2022-03-16 14:30:00
description: description.never_ending_weather_station
show_social: true
teaser: |
  Im Laufe der nun mehr fast sieben Jahre bin ich immer mal wieder zu meinem Wetterstationsprojekt zurückgekommen. Egal ob Auffrischung des Ursprungsprojektes...
---

## Die Anfänge

Erstmals habe ich im Juli 2015 in einem Blogartikel über eine Wetterstation geschrieben. Damals bestand diese aus einem Raspberry Pi, einem DTH22 und einem LCD-Display. Alles sehr rudimentär zusammen gewürfelt mit einem Script, welches regelmäßig abgestürzt ist. Auch ist der Begriff Wetterstation vielleicht ein bisschen übertrieben gewesen. Ein Sensor, der Temperatur und Luftfeuchtigkeit messen kann und ein Display, was ausschließlich diese Live-Werte ausgibt, ist noch immer ein Thermometer.  
Doch so begann damals im Studentenwohnheim meine lange Reise der "Wetterstationen".

## Was bisher geschah

Im Laufe der nun mehr fast sieben Jahre bin ich immer mal wieder zu diesem Projekt zurückgekommen. Sei es eine Auffrischung des Ursprungsprojektes oder ein neuer Versuch in einer anderen Programmiersprache. Eine ganz neue Wendung stellte sich zu meinem Geburtstag vor drei Jahren ein. Ich erhielt eine Box, welche neben dem mir bereits bekannten DHT22 auch noch ein BMP280 (für Luftdruck), ein MQ135 (Gas-Sensor) enthielt. Auch sollte das Ganze nicht mehr über einen Raspberry Pi laufen, sondern auf dem mit dazu geschenkten ESP8266, einem Microcontroller ähnlich zum Arduino mit integriertem WIFI. Eigentlich eine schöne neue Spielwiese für einen Hobbybastler wie mich. Ich habe alles zusammen gesteckt und ein bisschen Software dafür geschrieben. Das war auch der Moment, in dem ich [PlatformIO](https://platformio.org "Externer Link: Projektwebseite von PlatformIO") für mich entdeckt habe.  

Die auf einem Breadboard zusammen gesteckten Komponenten waren relativ instabil und ich hatte mir auch kurz zuvor ein Tutorial angesehen, welches PCB-Prototyping thematisierte. Demnach war der für mich logische nächste Schritt das Erstellen eines eigenen PCBs, welches einen Sockel für den ESP und Anschlüsse für die drei Sensoren bereitstellte. Das Endresultat hatte nach meiner Meinung nun endlich auch den Titel "Wetterstation" verdient. Doch dann kamen die großen Pläne: Was wäre, wenn ich mehrere von diesen Stationen in der Wohnung verteile? Und wenn sie alle gemeinsam an meinen Server die aktuellen Daten senden würden? Dafür bräuchte ich dann eine API und auf den Geräten selbst am besten eine kleine Konfigurationsmöglichkeit. Und wenn das dann alles irgendwann mal fertig ist, kann ich noch ein drittes Projekt, ein Display, was mir alle Werte schön aufbereitet anzeigt, angehen.  

Nachdem ich eine Weile mit der Hardware herum experimentiert hatte, entschied ich mich zu einem Upgrade. Der ESP8266 musste einem ESP32 weichen, welcher mehr Speicher und Rechenleistung beinhaltete. Blöderweise sind mir meine alten Projektdateien für das PCB abhandengekommen, also habe ich es noch mal neu mit den aktualisierten Komponenten angefertigt. An sich eigentlich kein Unterschied, nur der bessere Mikroprozessor.

## Alle guten Dinge sind drei

Wieder verstrich etwas Zeit und ich hatte mich in der Zwischenzeit etwas mit SMD-Löten beschäftigt und mein Wissen im Platinen-Design mittels Tutorials weiter ausgebaut. Bei diesem Prozess werden die Komponenten nicht wie im Hobbybereich üblich durch die Leiterplatte gesteckt, sondern sind so konstruiert, dass sie nur auf der Oberfläche angebracht werden.  
Ich habe mir überlegt, was für Sensoren sind wirklich sinnvoll für ein Überwachen und Aufzeichnen von Temperatur, Luftfeuchtigkeit und Luftdruck. Alle drei Werte lassen sich mit einem BME280 von Bosch messen. Theoretisch gibt es auch diesen vorgefertig auf einer Platine, welche einfach über Steckverbindungen an dem ESP angeschlossen werden könnte. Der Punkt ist, ich verkompliziere gerne die Dinge und vielleicht nutze ich dieses Projekt auch ein wenig als Ausrede, um mich an neuen Dingen auszuprobieren. Also habe ich mich nach Schaltplänen für die ESP32 Developmentboards umgeschaut und bin bei Adafruit fündig geworden. An dieser Stelle ein sehr großes Danke an die Entwickler bei Adafruit, die fast ihre kompletten Produkte inklusive der Schematischen Zeichnungen und PCB-Files OpenSource zur Verfügung stellen! Das hat mir wirklich sehr geholfen, Inspirationen für mein eigenes Design zu holen. Ich habe mir also ein PCB zusammengestellt, welches nebst ESP32 auch einen BME280 enthält und wahlweise via USB-C, Akku oder DC-Stecker betrieben werden kann.  
Noch habe ich keine Zeit gefunden, die PCBs auch wirklich mit den Komponenten zu bestücken, doch das steht hoffentlich sehr bald an. Ich bin gespannt, in welche Richtung sich dieses Projekt noch entwickeln wird.
