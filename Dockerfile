FROM node:13-alpine

# Create srv directory
WORKDIR /srv/api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


RUN npm install
RUN npm install dotenv

# If you are building your code for production
# RUN npm install --only=production

ENV NODE_ENV development

# Bundle app source
COPY . .

EXPOSE 9000
CMD [ "npm", "run", "dev" ]
