# lightgram

> Social Media

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## API Endpoint

| URL | METHOD | DESCRIPTION |
|:---:|:------:|:-----------:|
| http://localhost/user/signin | POST | Login User |
| http://localhost/user/signup | POST | Register User |
| http://localhost/post | POST | Add New Post |
| http://localhost/post | GET | Get All Post |
| http://localhost/post/:id | PUT | Edit Post Caption |
| http://localhost/post/:id | DELETE | Delete Post |
| http://localhost/post/:id | POST | Add Reaction |
