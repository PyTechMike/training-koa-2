import fileSystem from '../services/fs.service';

// export default
class Storage {
	constructor (filePass) {
		this.whenReady = Promise.resolve();
		this.filePass = filePass || 0;
	}
	get (key) {
		this.whenReady = this.whenReady
		.then(function () {
			return new Promise(function (resolve) {
				let value = fileSystem.get(Storage.filePass, key);

				// let value = 10; // test

				resolve(value);
			});
		});
		return this.whenReady;
	}
	set (key, value) {
		this.whenReady = this.whenReady
		.then(function () {
			return new Promise(function (resolve) {
				fileSystem.set(Storage.filePass, key, value);

				// let value = 9; // test

				resolve(value);
			});
		});
		return this.whenReady;
	}
	remove (key) {
		this.whenReady = this.whenReady
		.then(function () {
			return new Promise(function (resolve) {
				fileSystem.remove(Storage.filePass, key);

				// let value = 8; // test

				resolve();
			});
		});
		return this.whenReady;

	}
}

let storage = new Storage('filePass');


console.log(storage.set('key666'));

storage.get('key666').then(function (number) {
	return console.log(number);
}).cat;
storage.set('key666', '543').then(function (number) {
	return console.log(number);
});
storage.remove('key666', '543').then(function (number) {
	return console.log(number);
});