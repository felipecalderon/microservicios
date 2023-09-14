FROM node:20

WORKDIR /gateway

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]