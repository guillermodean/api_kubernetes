FROM node:14

WORKDIR /api

COPY packaje*.json ./

RUN npm install

COPY . .

EXPOSE 4500

CMD [ "npm", "start" ]