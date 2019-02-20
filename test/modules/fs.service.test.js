import { readFile } from '../../src/services/fs.service';

describe('readFile', function () {
	test('returns all text from file', function () {
		return readFile('D:\\Misha\\JS\\training-koa-2\\stores\\test-storage.json').then(function (data) {
			expect(data).toEqual('{"key1":"val1" ,"key2":"val2" }');
		});
	});
});