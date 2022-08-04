# Utiliser Node
FROM node:16.16.0-alpine3.16 as base
# ENV NODE_ENV=production

# Pour la production
FROM base as prod

# Créer un dossier pour l'application
RUN mkdir -p /home/arphan/portfolio/client
WORKDIR /home/arphan/portfolio/client

# Installer nginx, git, ufw, certbot
RUN apk update && apk add nginx \
git \
ufw \
certbot \
certbot-nginx

# Installer pm2
RUN npm install --location=global pm2
#RUN pm2 startup ubuntu

# Installer les app dependencies
COPY package*.json ./
RUN npm install

# Copier l'application
COPY . .

# Créer le build folder
RUN npm run build

# Démarrer le serveur 3000 avec pm2
EXPOSE 3000
CMD [ "npm", "start" ]
# CMD [ "pm2", "start", "npm" ,"--name", "portfolio", "--", "run" ,"start" ]

# Pour le développement
# RUN mkdir -p /app
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm", "run", "dev"]
