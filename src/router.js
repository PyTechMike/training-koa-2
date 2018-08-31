import Router from 'koa-router';

let router = new Router();

export default router
	.get('/items', function ({ response, params }) {
		response.body = 'Get all todo items';
	})
	.get('/items/:number', function ({ response, params }) {
		response.body = `Get todo item number: ${params.number}`;
		console.log(params.number);
	})
	.post('/items', function ({ response }) {
		response.body = `Post all todo items`;
	})
	.put('/items/:number', function ({ response, params }) {
		response.body = `Put todo item number: ${params.number}`;
		console.log(params.number);
	})
	.del('/items/:number', function ({ response, params }) {
		response.body = `Delete item number: ${params.number}`;
		console.log(params.number);
	});