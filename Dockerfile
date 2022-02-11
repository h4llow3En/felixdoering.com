FROM jekyll/builder:4 as builder

COPY src /build
WORKDIR /build

RUN jekyll build --verbose
WORKDIR /build/_site

#hadolint ignore=SC2086
RUN echo "<?xml version='1.0' encoding='UTF-8'?>" > sitemap.xml && \
    echo "<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>" >> sitemap.xml && \
    for file in $( find . -type f -iname "*.html"); do \
      echo "<url><loc>https://felixdoering.com${file:1}</loc><lastmod>$(date -r $file)</lastmod></url>"  >> sitemap.xml; \
    done && \
    echo "</urlset>" >> sitemap.xml

FROM nginx:1.21-alpine

COPY --from=builder /build/_site /usr/share/nginx/html
COPY /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
