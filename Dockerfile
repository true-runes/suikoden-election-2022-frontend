FROM alpine:3.18.3

WORKDIR /tmp

RUN echo "Hello, Alpine World!"

# Pin versions in apk add. Instead of `apk add <package>` use `apk add <package>=<version>`
# RUN apk --no-cache add curl
