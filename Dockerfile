FROM node:lts-alpine as builder
ARG NODE_OPTIONS=--max-old-space-size=384
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

# # Установка прав и владельца
# RUN mkdir -p /usr/share/nginx/html && \
#     chown -R nginx:nginx /usr/share/nginx/html && \
#     chmod -R 755 /usr/share/nginx/html

    # Удалите дефолтную конфигурацию
RUN rm /etc/nginx/conf.d/default.conf

# Копирование конфигурации
COPY nginx.conf /etc/nginx/nginx.conf

# Копирование приложения
COPY --from=builder /app/dist /usr/share/nginx/html

# Проверка конфигурации
RUN nginx -t

# Установите права
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html
    
EXPOSE 80


