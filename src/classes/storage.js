import fileSystem from '../services/fs.service';


export default class Storage {
	constructor (filePath) {
		this.whenReady = Promise.resolve();
		this.filePath = filePath || 0;
	}
	get (key) {
		let filePath = this.filePath;

		this.whenReady = this.whenReady
		.then(function () {
			return new Promise(function (resolve) {
				let value = fileSystem.get(filePath, key);

				resolve(value);
			});
		});
		return this.whenReady;
	}
	set (key, value) {
		let filePath = this.filePath;

		this.whenReady = this.whenReady
		.then(function () {
			return new Promise(function (resolve) {
				fileSystem.set(filePath, key, value);

				resolve(value);
			});
		});
		return this.whenReady;
	}
	remove (key) {
		let filePath = this.filePath;

		this.whenReady = this.whenReady
		.then(function () {
			return new Promise(function (resolve) {
				fileSystem.remove(filePath, key);

				resolve();
			});
		});
		return this.whenReady;

	}
}

// let storage = new Storage('filePass');
// storage.set('key666', '543').then(function (number) {
// 	console.log(number);
// 	return;
// }).catch(function (err) {
// 	console.error(err);
// });

// storage.get('key666').then(function (number) {
// 	console.log(number);
// 	return;
// }).catch(function (err) {
// 	console.error(err);
// });

// storage.remove('key666', '543').then(function (number) {
// 	console.log(number);
// 	return;
// }).catch(function (err) {
// 	console.error(err);
// });