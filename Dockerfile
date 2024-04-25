FROM node:21-alpine3.18 AS base

ARG API_URL

ENV VITE_API_URL=${API_URL}
ARG COREPACK_ENABLE_STRICT=0

RUN npm i -g pnpm 

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 4173

CMD ["pnpm", "preview"]
