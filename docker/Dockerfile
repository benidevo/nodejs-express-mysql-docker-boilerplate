FROM node:16.14-slim

WORKDIR /app
RUN apt-get update
RUN apt-get -y --no-install-recommends install netcat

COPY --chown=node:node ./package.json ./

RUN yarn

EXPOSE 8000

COPY --chown=node:node ./src .

COPY ./docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

USER node

CMD ["/entrypoint.sh"]