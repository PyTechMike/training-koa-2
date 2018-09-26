import Storage from '../classes/storage';

let storage = new Storage('data');

export default {
	getAllTodos () {
		return Promise.resolve(storage.get('test'));
	},
	getTodoById (id) {
		return Promise.resolve(storage.get(id));
	},
	postTodo (todo) {
		return Promise.resolve(storage.set(1, todo)); // Object.assign
	},
	putTodo (id, content) {
		return Promise.resolve(storage.set(id, content));
	},
	delTodo (id) {
		return Promise.resolve(storage.remove(id));
	}
};