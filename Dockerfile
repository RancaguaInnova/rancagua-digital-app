FROM node:14-alpine
RUN apk add g++ make python
WORKDIR /app
RUN npm install -g @ionic/cli
COPY package.json ./
RUN npm i --silent
EXPOSE 3000
CMD ["npm","start"]