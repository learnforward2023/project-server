FROM node:21-alpine

ARG ENVIRONMENT=development

WORKDIR /app

COPY package*.json ./

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 8080
