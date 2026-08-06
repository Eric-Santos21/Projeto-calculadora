FROM nginx:latest
COPY . /www /usr/share/nginx/html
EXPOSE 80