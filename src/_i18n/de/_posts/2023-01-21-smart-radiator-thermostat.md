---
layout: post
title: Wie smart so ein Heizungsthermostat sein kann
date:   2023-01-21 15:45:00
last_modified_at: 2023-01-22 12:00:00
description: description.smart_radiator_thermostat
show_social: true
teaser: |
  Abgesehen davon, dass ich bereits seit einiger Zeit mein Zuhause gerne Stück für Stück "smarter" gestalten möchte, gaben mir die aktuell steigenden Energiekosten...
---

## Der Grund

Abgesehen davon, dass ich bereits seit einiger Zeit mein Zuhause gerne Stück für Stück "smarter" gestalten möchte, gaben mir die aktuell steigenden Energiekosten einen Grund, die Thermostate der Heizkörper meiner Wohnung gegen smarte Varianten auszutauschen. Mit der Möglichkeit, die Temperatur meines Zuhauses mittels festgelegter Zeitpläne, via App oder in Abhängigkeit meiner Anwesenheit zu steuern, erhöht sich nicht nur der Komfort, sondern es lassen sich zusätzlich die Heizkosten reduzieren.  
Doch für welche Thermostate entscheidet man sich? Und warum gibt es bei den Produkten so unglaublich große Preisspannen?

## Die Kaufentscheidung

Anfang Dezember 2022 stand der Entschluss fest. Es sollten neue und intelligente Heizungsthermostate her. Ich habe eine Liste an Mindestanforderungen aufgestellt, um die große Produktauswahl etwas zu reduzieren, doch im Großen und Ganzen war für mich wichtig, dass sie mit Apple HomeKit kompatibel und vor allem zuverlässig sind. Es gibt genügend Produkte, deren Rezensionen ständige Kommunikationsabbrüche trotz geringer Entfernung zur Bridge berichten.  
Letztendlich fiel die Entscheidung auf ein System von tado°, da die Geräte relativ klein und unauffällig sind. Ein kleiner Wermutstropfen ist allerdings, dass für einige "Premium"-Features der App monatlichen Abokosten anfallen, sofern man diese nutzen möchte. Unter anderem ist genau die von mir gewünschte Abwesenheitserkennung bzw. das automatische Ein- und Ausschalten der Heizkörper eine dieser Funktionen. Will man nicht monatlich 3€ dafür bezahlen, wird man lediglich über Pushbenachrichtigungen darüber informiert, dass das System ein offenes Fenster oder keine anwesende Person erkannt hat. Die Anwesenheitserkennung funktioniert, wie bei so ziemlich allen Smarthome-Geräten mittels [Geofencing](https://de.wikipedia.org/wiki/Geofencing). Dabei senden die registrierten Smartphones ihre GPS-Koordinaten und es wird überprüft, ob sich diese innerhalb eines virtuell "abgezäunten" Bereiches befinden. 

## Das nicht so smarte Thermostat

Die ernüchternde Wahrheit: Egal für welches Thermostat ich mich entschieden hätte, ich wäre in so ziemlich die gleichen Probleme gerannt. Früher oder später stößt man immer an die Grenzen der Geräte. In meinem Fall ist die Temperatur, welche die Thermostate an den Heizkörpern messen, oft wesentlich höher als die tatsächliche Temperatur mitten im Raum, sodass sie nicht weiter heizen, obwohl die Zieltemperatur noch nicht erreicht ist. Auch das Geofencing über tado selbst verbraucht unglaublich viel Akku. Dazu kommt noch, dass diese Benachrichtigungsfunktion sehr wahrscheinlich so ausgelegt ist, dass man irgendwann keine Lust mehr darauf hat und einfach bezahlt. Es musste eine Lösung her, und zwar eine, die keine laufenden Kosten verursacht.

## Ein Assistent für Heim und Heizung

Softwareentwickler sind normalerweise zu stolz, Geld für Funktionen zu bezahlen, die sie selbst ebenfalls bauen könnten. Mir ging es ähnlich, denn ich war es Leid, manuell die Heizung auf "nicht zu Hause" zu schalten. Dann hätte ich auch die alten Thermostate behalten können. Zum Glück gibt es Open-Source-Software, die einen dabei unterstützt, ein wenig Kontrolle und Vereinheitlichung über die ganzen Hersteller mit ihren eigenen Clouds, Bridges und proprietären Protokollen zu erlangen. Meine Wahl fiel auf [Home Assistant](https://www.home-assistant.io).  
Einmal in Home Assistant eingebunden, liefern die tado-Geräre sämtliche Daten, die sie auch der App zur Verfügung stellen. Unter anderem auch die Offenes-Fenster-Erkennung, welche normalerweise ebenfalls nur eine Benachrichtigung angestoßen hätte. Alleinig die Standortdaten beziehungsweise ob registrierte Geräte im Umkreis sind, werden nicht übermittelt. Glücklicherweise kann Home Assistant das von selbst, und zwar ganz ohne Cloud alles lokal ausgewertet.  
Also habe ich Automationen eingerichtet, die tado mitteilen, dass die Heizung in den "away"-Modus wechseln soll, sobald sich kein Gerät mehr in der Nähe befindet und der tado-App die Berechtigung der Standortdatennutzung entzogen. Plötzlich hält auch mein Akku wieder viel länger durch. Auch wird auf durch tado registrierte offene Fenster reagiert und die Heizung, genauso wie in den Premiumfunktionen, für diese Zeit auf eine niedrigere Temperatur gestellt.

## Es ist trotzdem noch zu kalt

Es besteht zwar die Möglichkeit, einen Offset einzustellen, um den Temperaturunterschied zwischen Raum und Heizkörper auszugleichen, doch war dieser in meinem Fall immer sehr variabel zwischen 1 und 3 Kelvin. So kam es häufiger vor, dass es im Zimmer noch ziemlich kühl war, die Heizung aber dachte, es seien bereits knapp 26 °C. Leider kann man tado nicht direkt selbst sagen, was die tatsächliche Raumtemperatur ist. Eine Möglichkeit ist die Anschaffung des Zusatzthermometers von tado selbst, welches gleich noch mal etwas mehr kostet als das eigentliche Heizkörperthermostat. Alternativ greift man wieder auf Home Assistant zurück und bindet dort wesentlich preisgünstigere Temperatursensoren ein, mit deren Hilfe über Automationen letztendlich der Offset dynamisch aktualisiert wird. An diesem Punkt bekommt man ein weiteres Mal den Nachteil zu spüren, wenn alle Daten ohne externen Kontext in der Cloud ausgewertet werden. Denn durch das manuelle Anpassen der Raumtemperatur mittels Offset glaubt tado ein offenes Fenster erkannt zu haben, was ausschließlich zu falsch positiven Resultaten führt. Dann deaktiviere ich doch lieber diese Erkennung und greife auf Tür- und Fensteröffnungssensoren zurück, welche nicht nur zuverlässig, sondern auch sofort, also nicht erst nach einem Temperaturabfall, reagieren.

## Resultat

Jetzt heizt alles nach meinen Wünschen, auch wenn ich noch einige zusätzliche Sensoren anschaffen musste. Letztendlich ist die Zusatzinvestition einmalig und zudem auch noch günstiger, als im tado-Universum vollständig eingesperrt zu sein.  
Sollte man mich fragen, ob ich meine Entscheidung diesen Hersteller gewählt zu haben bereue, lautet meine Antwort: Nein, nicht wirklich. Wie zuvor bereits erwähnt, hat jedes Produkt seine Eigenheiten und bei anderen Herstellern wären mich teilweise auch noch mehr die Hände gebunden gewesen. Trotzdem freue ich mich, wenn neue Standards wie [Matter](https://de.wikipedia.org/wiki/Matter_(Standard)) eingeführt werden, die es erlauben, Geräte ausschließlich lokal und auch herstellerunabhängig zu betreiben. Theoretisch gibt es dafür ja bereits einige Funkstandards wie Zigbee oder Z-Wave, aber haben hier Hersteller trotzdem noch die Möglichkeit, Funktionalitäten enorm einzuschränken - Ja, ich rede von Philips Hue, deren Hub zwar Zigbee spricht, aber nur im Light Link Protokoll. Bezahlt ein Unternehmen, um in das "Friends of Hue"-Programm aufgenommen zu werden, können seltsamerweise auch deren Temperatursensoren eingebunden werden.