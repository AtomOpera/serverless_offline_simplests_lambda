FROM node:14.18.1
WORKDIR /app
COPY ./package*.json ./
RUN yarn
COPY . .
CMD ["yarn", "start"]