import Koa from 'koa';

import router from './router';
import Storage from './classes/storage';

export default new Koa()
	.use(router.routes())
	.use(router.allowedMethods())
	.on('error', function (err, ctx) {
		console.error(err, ctx);
	});

// storage.set('test3', 12);
// storage.set('test5', 12);

// storage.remove('test5');

// storage.get('test5', 12);

// storage.get('test2').then(function (val) {
// 	console.log(val);
// 	return;
// }).catch(function (err) {
// 	console.error(err);
// });