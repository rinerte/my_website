FROM node:lts-alpine as builder
ARG NODE_OPTIONS=--max-old-space-size=384
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

RUN sed -i 's/error_log .*;/error_log stderr debug;/' /etc/nginx/nginx.conf && \
    sed -i 's/access_log .*;/access_log stderr;/' /etc/nginx/nginx.conf

COPY app.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

