# Step 1: Specify the base image
FROM node:latest

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install app dependencies
RUN npm install

# Step 5: Copy the rest of your app's source code
COPY . .

# Step 6: Build your app
RUN npm run build

# Step 7: Install serve to run the application
# Consider if you really need serve globally installed
RUN npm install -g serve

# Step 8: Define the command to run your app
CMD ["serve", "-s", "build"]
