FROM node:12

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm","start"]

# March 15,2021