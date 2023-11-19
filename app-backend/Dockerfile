FROM node:18.18.0

ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz\
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz\
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY ./api /app-backend

WORKDIR /app-backend

RUN npm ci --production && npm install -g pm2

EXPOSE 3333

CMD dockerize -wait tcp://app-database:5432 -timeout 60s npm run db:runf && pm2-runtime start npm -- start