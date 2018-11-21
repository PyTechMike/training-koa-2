import todos from '../../src/services/todos.service';
import Storage from '../../src/classes/storage';

descride('Todos service can', function () {
	let result;

	beforeEach(function () {
		jest.spyOn(Storage.prototype, 'getAll').mockResolvedValue('data');
		jest.spyOn(Storage.prototype, 'get').mockResolvedValue('data');
	});
	test('get all todos', async function () {
		result = await todos.getAllTodos();
		expect(result).toBe(true);
	});

	test('get todo by id', async function () {
		result = await todos.getAllTodos();
		expect(result).toBe(true);
	});

	afterEach(function () {
		jest.clearAllMocks();
	});
});