const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

router.render = (req, res) => {
  if (res.statusCode === 200) {
    res.jsonp({
      ok: 1,
      msg: 'Http Result Code 200 OK',
      item: res.locals.data,
    });
  }
  if (res.statusCode === 400) {
    res.jsonp({
      ok: 0,
      msg: 'Check your params',
      item: [],
    });
  }
  if (res.statusCode === 404) {
    res.jsonp({
      ok: 0,
      msg: 'ITEM_DOESNT_EXIST',
      item: [],
    });
  }
};

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
});
