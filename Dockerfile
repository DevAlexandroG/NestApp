FROM node:14 AS development

WORKDIR //api

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

FROM node:14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR //api

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install --only=production

COPY . .


CMD ["node", "dist/main"]