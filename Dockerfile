FROM node:14.17.3

RUN mkdir -p /app
WORKDIR /app
ADD /src /app
RUN npm install

ENV NODE_ENV = production
CMD ["node", "main.js"]