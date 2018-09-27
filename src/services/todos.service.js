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
		return Promise.resolve(storage.set(todo)); // Object.assign
	},
	putTodo (todo) {
		return Promise.resolve(storage.set(todo));
	},
	delTodo (id) {
		return Promise.resolve(storage.remove(id));
	}
};