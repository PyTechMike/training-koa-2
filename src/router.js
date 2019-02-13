import Router from 'koa-router';

import todos from './services/todos.service';

let router = new Router();

// manageTodo

export default router
	.get('/', respondBasic)
	.get('/todos', respondAllTodos)
	.get('/todos/:id', respondCurrentTodo)
	.post('/todos', function ({ response, request }) {
		return todos.postTodo(request.body).then(function (todo) {
			return response.body = todo;
		});
	})
	.put('/todos/:id', function ({ response, request, params }) {
		return todos.putTodo(request.body, params.id).then(function (todo) {
			return response.body = todo;
		});
	})
	.del('/todos/:id', function ({ response, params }) {
		return todos.delTodo(params.id).then(function (todo) {
			return response.body = todo;
		});
	});