import { readFile, writeFile } from '../services/fs.service';


export default class Storage {
	constructor (filePath) {
		this.whenReady = Promise.resolve();
		this.filePath = filePath || 0;
	}
	get (key) {
		let filePath = this.filePath;

		this.whenReady = this.whenReady
			.then(function () {
				return readFile(filePath);
			})
			.then(JSON.parse)
			.then(function (data) {
				if (key in data) {
					return data[key];
				}
				throw new Error(`${key} is not exist in this data.`);
			});

		return this.whenReady;
	}
	set (key, value) {
		let filePath = this.filePath;

		this.whenReady = this.whenReady
			.then(function () {
				return readFile(filePath);
			})
			.then(JSON.parse)
			.then(function (data) {
				data[key] = value;
				return data;
			})
			.then(JSON.stringify)
			.then(function(data) {
				writeFile(filePath,  data);
				return data[key];
			})
		return this.whenReady;
	}
	remove (key) {
		let filePath = this.filePath;

		this.whenReady = this.whenReady
			.then(function () {
				return readFile(filePath);
			})
			.then(JSON.parse)
			.then(function (data) {
				if (key in data) {
					delete data[key];
				}
				return data;
			})
			.then(JSON.stringify)
			.then(function(data) {
				writeFile(filePath, data)
				return true;
			});
			
		return this.whenReady;
	}
}

let storage = new Storage('data.json');

storage.set('2221', '2');
storage.get('2221');
storage.remove('2221');