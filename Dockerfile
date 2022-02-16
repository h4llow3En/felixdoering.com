FROM jekyll/builder:4 as builder

COPY src /build
WORKDIR /build

RUN env JEKYLL_ENV=production jekyll build
WORKDIR /build/_site

COPY script/sitemap.sh ./sitemap.sh
#hadolint ignore=SC2086
RUN chmod +x sitemap.sh && \
    bash sitemap.sh && \
    rm sitemap.sh

FROM nginx:1.21-alpine

COPY --from=builder /build/_site /usr/share/nginx/html
COPY /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
