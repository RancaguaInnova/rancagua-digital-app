FROM node:14-alpine
RUN apk add g++ make python
WORKDIR /rancagua-digital-app
RUN npm install -g @ionic/cli
COPY package.json ./
RUN npm install
EXPOSE 3000
CMD ["npm","start"]