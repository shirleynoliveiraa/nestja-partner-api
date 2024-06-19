FROM node:20-slim

RUN apt-get update -y && apt-get install -y openssl procps

RUN npm install -g @nestjs/cli@10.3.2

WORKDIR /home/node/app

USER node

CMD tail -f /dev/null