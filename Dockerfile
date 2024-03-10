FROM node:21-alpine

ARG ENVIRONMENT=development

WORKDIR /app

COPY package*.json ./

RUN yarn install
COPY . .
COPY .env.${ENVIRONMENT} .env.production
RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]
