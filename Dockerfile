FROM jekyll/builder:4.2.2 as builder

COPY src /build
WORKDIR /build

RUN env JEKYLL_ENV=production jekyll build

FROM nginx:1.21-alpine

COPY --from=builder /build/_site /usr/share/nginx/html
COPY /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf


# 2022-02-25T00:00:00+01:00
