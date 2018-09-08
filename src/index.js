import Koa from 'koa';

import router from './router';

// import Storage from './classes/storage';

export default new Koa()
	.use(router.routes())
	.use(router.allowedMethods())
	.on('error', function (err, ctx) {
		console.error(err, ctx);
	});