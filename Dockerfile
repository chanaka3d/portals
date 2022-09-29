FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm i
RUN ls
RUN echo "$PWD"
RUN npm install --prefix client
RUN npm run build --prefix client
EXPOSE 4000
CMD ["npm", "run", "start"]