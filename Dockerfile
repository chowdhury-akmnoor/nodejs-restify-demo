FROM node:14-buster

WORKDIR /app

COPY . ./

RUN npm install

CMD [ "npm", "run", "start" ]
