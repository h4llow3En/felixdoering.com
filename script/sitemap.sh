#!/bin/bash

echo "<?xml version='1.0' encoding='UTF-8'?>" >sitemap.xml
echo "<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>" >>sitemap.xml
for file in $(find . -type f -iname "*.html"); do
  html=${file:1}
  echo "<url><loc>https://felixdoering.com${html/index.html/}</loc></url>" >>sitemap.xml
done
echo "</urlset>" >>sitemap.xml
