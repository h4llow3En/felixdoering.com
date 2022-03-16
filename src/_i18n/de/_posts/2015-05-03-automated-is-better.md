---
layout: post
title: Automatisch ist immer besser!
date: 2015-05-03 20:03:00
description: description.automated_is_better
show_social: true
teaser: |
  Gestern Abend habe ich in meinem Traffic-Plugin für das Wohnheiminternet einen Bug in der Anzeige des noch verfügbaren Traffics gefunden. Also habe ich mich an die Arbeit gemacht, den auch so schnell wie möglich...
---

Gestern Abend habe ich in meinem Traffic-Plugin für das Wohnheiminternet einen Bug in der Anzeige des noch verfügbaren Traffics gefunden. Also habe ich mich an die Arbeit gemacht, den auch so schnell wie möglich zu beheben, damit man es wieder zuverlässig nutzen kann.

Ich kenne bis jetzt, abgesehen von mir, nur zwei Leute, die dieses Tool nutzen, [Justus](https://github.com/JustusAdam "Externer Link: Profil von Justus Adam auf Github"){:target="_blank"} und [Kilian](https://github.com/kiliankoe "Externer Link: Profil von Kilian Költzsch auf Github"){:target="_blank"}. Also habe ich auch beide kontaktiert, dass ich eine neue Version released habe.
Aus Spaß brachte Justus die Idee an, dass in der nächsten Version dann ruhig ein Autoupdater mit enthalten sein könnte. Ich muss zugeben, dass auch ich bereits davor schon mit dem Gedanken gespielt habe, weil das so ziemlich die einzige Möglichkeit ist Updates einer vielleicht später auch mal breiteren Masse auszuteilen.

Meine erste Idee war, dass ich ähnlich wie das abrufen des Traffics jede Minute eine Anfrage bei der Github-API mache, was der aktuellste Release ist. Das wäre allerdings ein ganz schönes hin und her geworden. Dank Kilian habe ich dann ein schönes Framework gefunden, [Sparkle](http://sparkle-project.org "Externer Link: Projektwebseite von Sparkle"){:target="_blank"}, welches es relativ einfach ermöglicht, Updates zu verteilen.

Wie eigentlich immer, wenn man nicht weiß wovon geredet wird, war es auch bei dieser Anleitung ziemlich kompliziert, sich dort einzulesen, besonders wenn man wie ich vorher noch nie wirklich mit Frameworks in XCode gearbeitet hat. Letztendlich habe ich es nun doch auf die Reihe bekommen.

Für alle, die dieses Framework auch nutzen wollen hier noch ein kleiner Tipp:
Standardmäßig überprüft Sparke immer __CFBundleVersion__ als Versionsnummer, was in XCode allerdings der __Build__ und *nicht* die Version ist.
