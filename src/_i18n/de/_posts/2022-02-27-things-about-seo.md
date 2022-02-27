---
layout: post
title: Die Sache mit der Search Engine Optimization (SEO)
date:   2022-02-27 17:45:00
images:
  - file: posts/seo/pagespeed.png
    alt: Screenshot Pagespeed Dev-Tools
    description: images.pagespeed
  - file: posts/seo/search-preview.png
    alt: Screenshot der Suchergebnisse dieser Seite in DuckDuckGo
    description: images.searchpreview
description: description.about-seo
show_social: true
teaser: |
  SEO, kurz für "Search Engine Optimization" (Suchmaschinenoptimierung), ist gleichzeitig eine tolle, aber auch eine schwierige Sache. Sie bezeichnet Maßnahmen...
---

## Was ist SEO?

SEO, kurz für "Search Engine Optimization" (Suchmaschinenoptimierung), ist gleichzeitig eine tolle, aber auch eine schwierige Sache.

> \[Sie\] bezeichnet Maßnahmen, die dazu dienen, die Sichtbarkeit einer Website und ihrer Inhalte für Benutzer einer Websuchmaschine zu erhöhen.  
> <cite>-- Quelle: [Wikipedia](https://de.wikipedia.org/wiki/Suchmaschinenoptimierung)</cite>

Vor allem bezieht sich SEO auf unbezahlten Traffic von Webseiten, also möglichst weit oben in Suchergebnissen zu erscheinen, ohne dafür (regelmäßig) Geld auszugeben.  
Neben dem Inhalt, auf welchen ich später noch weiter drauf eingehen werde, ist die generelle Performance der Seite sehr wichtig. Wie und vor allem wann wird das CSS geladen, blockieren Elemente den Seitenaufbau, wie schnell antwortet der Server. All diese Sachen und noch einige mehr gilt es zu beachten, wenn man sein SEO verbessern möchte.  
Um sich einen Überblick zu verschaffen, wie Google die Seiten performancetechnisch einschätzt, bieten die [PageSpeed Insights](http://pagespeed.web.dev/) eine ganz gute Möglichkeit. Wenn es nur darum gehen würde hätte ich mit einer Bewertung von 99 auf Desktop und 100 auf Mobilgeräten schon ausgesorgt.

## Auf den Inhalt kommt es an

Inhalt ist ebenfalls ein sehr wichtiger Punkt, den es bei mir zu optimieren gilt. Um so mehr Content und Unterseiten eine Webseite hat, desto mehr kann auch von Suchmaschinen geindext werden. Und um so größer der Index, desto besser das Ranking. Ist relativ ähnlicher Inhalt auf mehreren Seiten vorhanden, schadet das dem Ranking wiederum. Google selbst sagt dazu Folgendes:

> Google ist bemüht, nur Seiten zu indexieren und in den Suchergebnissen anzuzeigen, deren Inhalte nicht auch anderswo so zu finden sind.
> <cite>-- Quelle: [Google](https://developers.google.com/search/docs/advanced/guidelines/duplicate-content?hl=de&visit_id=637810314573295411-4102688112&rd=1)</cite>

Im weitesten Sinne führt also dieser Blogpost mit meinen Erfahrungen, die ich zur SEO-Optimierung machen durfte, zu mehr Inhalt auf meiner Seite und somit zu einer besseren Chance, weiter oben in den Suchergebnissen angezeigt zu werden.

## Nicht nur Text ist Inhalt

Suchmaschinen interessieren sich nicht nur für den Text auf einer Seite, sondern auch für Metainformationen. Genaugenommen ist das zwar auch Text, jedoch wird dieser nicht direkt auf der Seite selbst angezeigt. So wird der `<title>` im Browser als Beschriftung für den Tab verwendet, dient aber hauptsächlich für Suchmaschinen zusammen mit der `<meta name="description">` und bei einigen auch dem Favicon zum Anzeigen in den Suchergebnissen. Keywords sind zwar immer noch empfohlen, werden jedoch in den meisten Indexen aufgrund von Missbrauch nicht mehr beachtet. Stattdessen sollten die wichtigsten Schlüsselwörter des Textes im Titel und der URL wiederzufinden sein.  
Zum Teilen der Webseite in sozialen Netzwerken haben Facebook und Twitter auch noch eigene Metainformationen hinzugefügt ([Open Graph protocol](https://ogp.me) und [Twitter cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup)). Diese reichern die Vorschau bei Teilen auf den jeweiligen Platformen mit zusätzlichen Informationen an und SEO belohnt diese Bemühungen des Webseitenbetreibers. Ebenso wie eingebettete Funktionen, die das Teilen direkt von der Seite aus ermöglichen, auf welche ich jedoch bei mir verzichten wollte.

## Der Link zu einer Seite

Die URL zu einem Post oder einer Seite sollte ebenfalls die Schlüsselwörter enthalten, welche auch in Text und Titel zu finden sind. Dabei ist darauf zu achten, möglichst keine Füllwörter und keine zu langen Adressen zu wählen. So erhält `/blog/things-about-seo` eine bessere SEO-Bewertung, als wenn ich sie beispielsweise weiter ausformulieren würde (`/blog/things-i-learned-about-seo`), selbst wenn diese es dem Endnutzer einfacher machen würde zu verstehen, dass dies hier ein Erfahrungsbericht und kein Tutorial ist. Die Kunst liegt darin, URLs genug "sprechend" zu gestalten, ohne sie zu überladen.  
Jekyll generiert, sofern so konfiguriert, aus einer Markdown-Datei eine `index.html` welche in einer Ordnerstruktur, die die URL repräsentiert, abgelegt wird. Verlinkt man nun zu dieser Seite, funktioniert das mit und ohne angehängtem `/index.html`, da mein Nginx in dem Verzeichnis immer nach dieser Datei sucht. Für Google und andere Suchseiten sind das jedoch zwei unterschiedliche Seiten. Damit die Seite nicht als duplicate content angesehen wird, ist es wichtig, bei der Verlinkung dem `<a>`-Tag ein `rel="canonical"` mitzugeben. So wird suggeriert, dass dies nur eine einzelne Seite ist.

## Es hat mobil gut auszusehen

Wer hat sie nicht, die Freunde, denen man einen Link schickt und keine zwei Minuten später erhält man eine Antwort wie: "Die ist echt nicht für Mobil geeignet". Nervig, wenn man ihnen einfach nur etwas zeigen möchte, doch eigentlich korrekt. Heutzutage werden Webseiten inzwischen wesentlich häufiger auf mobilen Geräten wie Handys oder Tablets angeguckt. Daher interessiert sich Google bei der Bewertung einer Seite auch sehr für die sogenannte Mobile Responsiveness.

## Schlussfolgerungen

Von Haus aus trägt Jekyll nicht wirklich viel zu SEO bei. Es gibt zwar ein Plugin, das die wichtigsten Metainformation einfügt, doch alles andere ist dem Nutzer selbst überlassen. Ich habe jedoch für mich festgestellt, dass all diese und noch einige weitere, hier nicht aufgeführte Optimierungen nur langsam Wirkung zeigen. Ein tolles SEO-Ergebnis ist nicht automatisch mit einem sofortigen guten Rang in den Suchergebnissen gleichzusetzen. Verschlechtert sich die SEO hingegen, zum Beispiel durch den Wegfall einer Seite, die noch im Index der Suchmaschinen vorhanden ist, folgt jedoch ein sofortiges Herabstufen.
