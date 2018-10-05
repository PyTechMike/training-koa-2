import Storage from '../classes/storage';

let storage = new Storage('data');

export default {
	getAllTodos () {
		return Promise.resolve(storage.getAll());
	},
	getTodoById (id) {
		return Promise.resolve(storage.get(id));
	},
	postTodo (todo) {
		return Promise.resolve(storage.add(todo));
	},
	putTodo (todo, id) {
		return Promise.resolve(storage.update(todo, id));
	},
	delTodo (id) {
		return Promise.resolve(storage.remove(id));
	}
};