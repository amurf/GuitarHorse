FROM node:8.2.1-alpine

WORKDIR /backend/

RUN apk update && \
    apk add postgresql-client && \
    rm -rf /var/cache/apk/*

COPY package.json /backend/
COPY package-lock.json /backend/
RUN npm install -q

COPY docker/docker-compose-start.sh /backend/
COPY docker/start.sh /backend/

COPY lib /backend/lib

COPY server.js /backend/
COPY schema.sql /backend/

EXPOSE 80
CMD node server.js
