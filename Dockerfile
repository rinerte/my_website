FROM node:lts-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM alpine:latest as certgen
RUN apk add openssl
RUN mkdir /ssl && openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /ssl/selfsigned.key -out /ssl/selfsigned.crt -subj "/CN=103.106.0.59"

FROM nginx:alpine
COPY --from=certgen /ssl /etc/nginx/ssl
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]