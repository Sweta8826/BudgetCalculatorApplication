FROM node:current-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
RUN npm install bulma
RUN npm uninstall node-sass && npm install node-sass
COPY . /app

EXPOSE 8080
CMD [ "npm", "start" ]
