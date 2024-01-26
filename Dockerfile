FROM node:18 

# # Korean Fonts
# RUN apk --update add fontconfig
# RUN mkdir -p /usr/share/fonts/nanumfont
# RUN wget http://cdn.naver.com/naver/NanumFont/fontfiles/NanumFont_TTF_ALL.zip
# RUN unzip NanumFont_TTF_ALL.zip -d /usr/share/fonts/nanumfont
# RUN fc-cache -f && rm -rf /var/cache/*

# # bash install
# RUN apk add bash

# # Language
# ENV LANG=ko_KR.UTF-8 \
#     LANGUAGE=ko_KR.UTF-8

# # Set the timezone in docker
# RUN apk --no-cache add tzdata && \
#         cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
#         echo "Asia/Seoul" > /etc/timezone

RUN mkdir -p /app

# Create Directory for the Container
WORKDIR /app

# Only copy the package.json file to work directory
COPY . .
RUN npm install
RUN npm run build
# Docker Demon Port Mapping
# EXPOSE 8443

# # Node ENV
# ENV NODE_ENV=prod
  
CMD ["node", "dist/src/main.js"]