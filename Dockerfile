FROM node:18.15.0
WORKDIR /usr/src/app
COPY . ./
RUN npm install --legacy-peer-deps
EXPOSE 8080
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080

## PUBLIC ENV VARS MUST BE PLACED HERE AS WELL, NEED TO FIND A FIX
ENV auth_cookie=_stash

RUN npm run build
CMD ["npm", "run", "start"]