import todos from '../../src/services/todos.service';
import Storage from '../../src/classes/storage';

descride('Todos service can', function () {
	let result, id, todo;

	beforeEach(function () {
		id = 3;
		todo = { data: 'some data' };
		jest.spyOn(Storage.prototype, 'getAll').mockResolvedValue('data');
		jest.spyOn(Storage.prototype, 'get').mockResolvedValue('data');
	});
	test('get all todos', async function () {
		result = await todos.getAllTodos();
		expect(result).toBe(true);
	});

	test('get todo by id', async function () {
		result = await todos.getTodoById(id);
		expect(result).toBe(true);
	});

	test('post todo', async function () {
		result = await todos.postTodo(todo);
		expect(result).toBe(true);
	});

	test('put todo by id', async function () {
		result = await todos.putTodo(todo, id);
		expect(result).toBe(true);
	});

	test('dalete todo by id', async function () {
		result = await todos.delTodo(id);
		expect(result).toBe(true);
	});

	afterEach(function () {
		jest.clearAllMocks();
	});
});