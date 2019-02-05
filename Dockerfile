FROM node:8-alpine

ENV HOST 0.0.0.0

RUN echo "--->>> creating app folder" && \
    mkdir -p /usr/src/app

WORKDIR /usr/src/app

# COPY package.json /usr/src/app

# RUN echo "--->>> Installing packages" && \
#     npm install

COPY . /usr/src/app

RUN echo "--->>> Installing packages" && \
    npm install

# RUN echo "--->>> Building app" && \
#     npm run build

EXPOSE 3000

CMD ["npm", "start"]