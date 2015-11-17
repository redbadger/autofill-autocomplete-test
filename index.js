var koa = require('koa');
var route = require('koa-route');
var app = koa();
var fs = require('fs');
var parse = require('co-body');

var readFileThunk = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function *index() {
  this.body = yield readFileThunk(__dirname + '/index.html');
}

function *post() {
  this.body = yield parse(this);
}

app.use(route.get('/', index));
app.use(route.post('/post/', post));

app.listen(3000);
