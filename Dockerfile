FROM node:8-alpine

ENV APP_ROOT /app
ENV HOST 0.0.0.0
ENV PORT 80

COPY . ${APP_ROOT}
WORKDIR ${APP_ROOT}

RUN npm install
RUN npm run build

CMD [ "npm", "start" ]
