FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist/angular-project ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]