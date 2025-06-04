FROM node:lts-alpine as builder
ARG NODE_OPTIONS=--max-old-space-size=384
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80


