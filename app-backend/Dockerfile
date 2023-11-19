FROM node:18.18.0

RUN apt update -y &&\
  apt upgrade -y &&\
  apt install -y git wget curl &&\
  apt autoremove -y &&\
  apt clean

ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz\
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz\
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN git clone https://github.com/METR1CKA/practica-encriptacion-api-compiled.git /app-backend

WORKDIR /app-backend

RUN npm ci --production

EXPOSE 3333

COPY .env .

RUN npm install -g pm2

CMD dockerize -wait tcp://app-database:5432 -timeout 60s git pull && npm run db:runf && pm2-runtime start npm -- start