# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build

# Install a simple web server to serve the Angular application
RUN npm install -g http-server

# Install json-server
RUN npm install -g json-server

# Expose the port the app runs on
EXPOSE 8080

# Expose the port for json-server
EXPOSE 3000

# Start both the Angular application and json-server
CMD ["sh", "-c", "http-server dist/angular-project -p 8080 & json-server --watch data.json --port 3000"]
