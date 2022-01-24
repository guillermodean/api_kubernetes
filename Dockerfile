FROM node:14

WORKDIR /api

COPY packaje*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]