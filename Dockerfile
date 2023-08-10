FROM node:16

WORKDIR /usr/src/index

COPY package*.json ./

RUN npm install

COPY ./src /src

EXPOSE 3001

CMD ["npm", "run", "start"]