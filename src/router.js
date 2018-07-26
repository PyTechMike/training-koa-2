import Router from 'koa-router';
var router = new Router();
	
export default router
	.get('/latest', function ({response}) {
		response.body = { };
	})
	.get('/users/:date', function({response, params}) {
		console.log(params)
	}) 
