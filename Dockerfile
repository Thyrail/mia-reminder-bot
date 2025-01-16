FROM node:18-alpine

RUN apk update && apk add --no-cache tzdata

ENV TZ=Europe/Berlin

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

EXPOSE 3200

CMD ["pnpm", "start"]