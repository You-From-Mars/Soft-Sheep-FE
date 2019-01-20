FROM ebiven/vue-cli AS vue
ADD ./package.json .
RUN npm install --registry=https://registry.npm.taobao.org
ADD . .
RUN npm run build


FROM nginx
COPY --from=vue /code/dist/. /usr/share/nginx/html/
EXPOSE 80