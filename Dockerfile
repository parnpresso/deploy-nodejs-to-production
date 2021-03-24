FROM node:14

WORKDIR /usr/src/app

COPY ./api/package*.json .
RUN npm i

COPY ./api .

EXPOSE 3000

CMD ["node", "index.js"]
