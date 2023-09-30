FROM node:20.7.0-alpine3.17

RUN apk add --no-cache bash
# This is backend server image by nodejs

# install typescript
# RUN npm install -g typescript
COPY ./src/package.json /src/
COPY ./src/package-lock.json /src/

WORKDIR /src

RUN npm i
