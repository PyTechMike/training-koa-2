import Koa from 'koa';
import jsonBody from 'koa-json-body';
import cors from 'koa2-cors';

import router from './router';


export default new Koa()
	.use(cors())
	.use(jsonBody({ limit: '1mb', fallback: true, strict: true }))
	.use(router.routes())
	.use(router.allowedMethods())
	.on('error', function (err, ctx) {
		console.error(err, ctx);
	});