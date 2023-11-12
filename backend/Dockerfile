FROM node:18.18.0-alpine

RUN apk update &&\
  apk upgrade &&\
  apk add --no-cache git

RUN git clone https://github.com/METR1CKA/practica-encriptacion-api-compiled.git /backend

WORKDIR /backend

RUN npm ci --production

EXPOSE 3333

CMD npm run db:runf && npm start