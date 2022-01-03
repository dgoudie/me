#
# Builder stage.
# This state compile our React App to get the JavaScript code
#
FROM node:16.13.1 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src
COPY ./public ./public

# Set env variable
ENV REACT_APP_GRAPHQL_API=https://me-api.goudie.dev/graphql

RUN npm ci --quiet && npm run build

# Stage 2
FROM nginx:1.17.1-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]