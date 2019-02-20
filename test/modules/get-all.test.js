import getAll from '../../src/modules/get-all';

describe('getAll', function () {
	let standartObject, numberKeysObject;

	beforeEach(function () {
		standartObject = {
			key1: 'val1',
			key2: 23,
			key3: [1, 2, 3]
		};
		numberKeysObject = {
			2: 'val3',
			0: 'val1',
			1: 'val2'
		};
	});
	test('returns an array of object values', function () {
		expect(getAll(standartObject)).toEqual(['val1', 23, [1, 2, 3]]);
	});
	test('returns an array of object values in right sequence', function () {
		expect(getAll(numberKeysObject)).toEqual(['val1', 'val2', 'val3']);
	});
});