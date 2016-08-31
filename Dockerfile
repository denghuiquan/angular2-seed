FROM node:6.3.1

ENV PROJECT_NAME angular2seed

MAINTAINER deng huiquan, denghuiquan@implustech.com

RUN apt-get update \
    && apt-get install git-core \
    && rm -rf /usr/src/*

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install -g grunt-cli pm2 typings
RUN npm install && npm cache clean


# Make everything available for start
# Bundle app source
COPY . /usr/src/app

# Port 8080 for web server
# Port 35729 for livereload
EXPOSE 8080

# set server environment
# ENV NODE_ENV production
ENV NODE_ENV devlopment

CMD [ "npm", "start" ]
