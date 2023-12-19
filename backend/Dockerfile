ARG NODE_IMAGE=node:16.13.1-alpine

FROM $NODE_IMAGE AS base
RUN npm install --global nodemon
RUN apk --no-cache add dumb-init
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
RUN npm install
COPY --chown=node:node . .

FROM dependencies AS build
RUN node ace build --production


EXPOSE $PORT
CMD [ "dumb-init", "npm", "run", "start" ]
