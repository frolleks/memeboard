FROM node:lts AS builder

WORKDIR /usr/src/app
COPY . .
COPY .env.build .env

RUN pnpm i --frozen-lockfile
RUN pnpm postinstall
RUN pnpm build

FROM node:lts-alpine

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .

EXPOSE 3000
CMD [ "pnpm", "start" ]