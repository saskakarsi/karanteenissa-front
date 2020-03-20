
# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 80 # Not needed on heroku
RUN rm /etc/nginx/conf.d/default.conf
COPY heroku-nginx.conf /etc/nginx/conf.d/app.conf
CMD "nginx"