const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const { pageLanding, pageStudy, pageGiveClasses } = require('./pages');

nunjucks.configure('src/views',{
  express: server,
  noCache: true,
})

server
.use(express.static("public"))

.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)