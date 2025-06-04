FROM node:lts-alpine as builder
ARG NODE_OPTIONS=--max-old-space-size=384
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
RUN mkdir -p /usr/share/nginx/html && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Копируем конфиг Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем файлы приложения
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80


