FROM jekyll/builder:4 as builder

COPY . /build
WORKDIR /build

RUN jekyll build --verbose

FROM nginx:1.21-alpine

COPY --from=builder /build/_site /usr/share/nginx/html
