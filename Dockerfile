# Stage 1: Build the Angular app with Node.js 20
FROM node:latest as build
#set workign directory
WORKDIR /app
#copy package.json & package-lock.json
COPY package*.json ./
# clean Install dependencies
RUN npm ci
# install the Angular cli globally
RUN npm install -g @angular/cli
#copy all files
COPY . .
#build the application
RUN npm run build --configuration=production

# Stage 2: Serve the app with Nginx
FROM nginx:latest
# Copy the build output from the previous stage
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Copy the build output to replace the default nginx contents
COPY --from=build /app/dist/angular-basics-101/browser /usr/share/nginx/html

EXPOSE 80

#docker build -t <docker-image-name> .

#docker run -d -p <host-machine-port>:80 <docker-image-name>
