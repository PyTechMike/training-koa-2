import path from 'path';

import getPathByFileName from '../../src/modules/get-storage-path-by-name';

describe('getPathByFileName', function () {
	beforeEach(function () {
		jest.spyOn(process, 'cwd').mockReturnValue('D:\\JS');
	});
	test('returns correct path to file', function () {
		expect(getPathByFileName('todos')).toEqual('D:\\JS\\stores\\todos.json');
	});
});