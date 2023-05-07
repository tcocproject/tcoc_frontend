#Multi-Step Docker Builds#
FROM node:16.3.0-alpine as builder

# set the working directory for container
WORKDIR /app

# copy the json file into the conatiner file system first
COPY ./*package.json /app

# install npm dependencies
RUN npm install

# copy other project files
COPY . .



# build the folder
RUN npm run build

# Handle Nginx 
FROM nginx
RUN mkdir /app
COPY --from=builder /app/dist  /app
COPY nginx.conf /etc/nginx/nginx.conf
