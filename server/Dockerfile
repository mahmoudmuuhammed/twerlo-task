FROM node:latest as development

WORKDIR /twerlo

COPY package*.json .

RUN npm install

COPY . ./

RUN npm run build

FROM node:latest as production

WORKDIR /twerlo

COPY package*.json .

RUN npm install --omit=dev

COPY --from=development /twerlo/dist ./dist

CMD [ "node", "./dist/app.js" ]