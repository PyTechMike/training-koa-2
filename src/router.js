import Router from 'koa-router';

import todos from './services/todos.service';

let router = new Router();


export default router
	.get('/', function ({ response }) {
		response.body = 'Welcome to Training Koa 2!';
	})
	.get('/todos', function ({ response }) {
		return todos.getAllTodos().then(function (allTodos) {
			return response.body = allTodos;
		});
	})
	.get('/todos/:id', function ({ response, params }) {
		return todos.getTodoById(params.id).then(function (todo) {
			return response.body = todo;
		});
	})
	.post('/todos', function ({ response, request }) {
		return todos.postTodo(request.body).then(function (todo) {
			return response.body = todo;
		});
	})
	.put('/todos', function ({ response, request }) {
		return todos.putTodo(request.body).then(function (todo) {
			return response.body = todo;
		});
	})
	.del('/todos/:id', function ({ response, params }) {
		return todos.delTodo(params.id).then(function (todo) {
			return response.body = todo;
		});
	});