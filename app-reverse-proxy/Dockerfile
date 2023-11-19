FROM nginx:latest

RUN apt update -y &&\
  apt upgrade -y &&\
  apt install -y git wget curl &&\
  apt autoremove -y &&\
  apt clean

RUN git clone https://github.com/METR1CKA/practica-encriptacion-frontend-compiled.git /usr/share/nginx/app-frontend

COPY default.conf /etc/nginx/conf.d/

EXPOSE 80