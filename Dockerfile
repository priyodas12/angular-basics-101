# Stage 1: Build the Angular app with Node.js 20
FROM node:latest as application
#set workign directory
WORKDIR /application
#add source cide to app.
COPY . ./application
# Install dependencies
RUN npm install
# Build the Angular application
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:latest

# Copy the build output from the previous stage
COPY --from=application /application/dist/angular-basic-101 /usr/share/nginx/html


