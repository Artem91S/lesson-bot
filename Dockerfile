FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm instal

COPY . /usr/src/app

CMD ["npm","start"]