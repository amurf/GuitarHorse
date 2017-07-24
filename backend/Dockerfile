FROM node:8.2.1-alpine

WORKDIR /backend/

COPY package.json /backend/
COPY package-lock.json /backend/
RUN npm install -q

COPY index.js /backend/

EXPOSE 80
CMD node index.js
