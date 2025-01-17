FROM node:18-bullseye

RUN mkdir /app

WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH

COPY package.json .

RUN npm cache clean --force

RUN npm i

COPY . .