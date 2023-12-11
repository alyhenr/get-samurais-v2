FROM node AS development

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

FROM node AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./

RUN npm install --omit=dev

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/jobs/main"]
