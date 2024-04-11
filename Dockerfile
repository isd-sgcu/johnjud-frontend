FROM node:21-alpine3.18 AS base

RUN npm i -g pnpm 

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "dev"]
