// import Koa from 'koa';
// import router from './router';
// import Storage from './classes/storage';

// export default new Koa()
// 	.on('error', function (err, ctx) {
// 		console.error(err, ctx);
// 	});
// let Koa = require('koa');
// let jsonBody = require('koa-json-body');

// let router = require('./router');
// let defaultErrorHandler = require('./default-error-handler');
// .use(defaultErrorHandler)

// module.exports = new Koa()
// 	.use(jsonBody({ limit: '1mb', fallback: true, strict: true }))
// 	.use(router.routes())
// 	.use(router.allowedMethods())
// 	.on('error', function (err, ctx) {
// 		console.error(err, ctx);
// 	});

// let storage = new Storage('data.json')
// storage.set('test', 1)
// storage.get('test').then(function(val){
//   console.log(val)
// })