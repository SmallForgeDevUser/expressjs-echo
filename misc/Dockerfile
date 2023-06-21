FROM bitnami/git:latest as gitcheckout

WORKDIR /app

RUN git clone https://github.com/smallforgedev/expressjs-echo.git /app

#
FROM node:lts-alpine

EXPOSE 3000

WORKDIR /app

COPY --from=gitcheckout /app /app

RUN npm install

CMD node /app/server.js
