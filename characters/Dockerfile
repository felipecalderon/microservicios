FROM node:20

WORKDIR /characters

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]