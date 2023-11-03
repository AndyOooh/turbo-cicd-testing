FROM node:alpine

#  set the working directory

WORKDIR /usr/app

#  copy the package.json file to the working directory

COPY ./package.json ./

#  install the dependencies

RUN npm install

#  copy the rest of the files to the working directory

COPY . .

#  start the app

CMD ["npm", "start"]




