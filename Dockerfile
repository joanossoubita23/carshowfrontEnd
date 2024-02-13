# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Clone your Git repository into the container
RUN apk add --no-cache git
RUN git clone <https://github.com/joanossoubita23/carshowfrontEnd.git> .

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Build your React app
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
