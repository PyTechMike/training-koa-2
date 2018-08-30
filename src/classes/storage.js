import path from 'path';

import { readFile, writeFile } from '../services/fs.service';

export default class Storage {
	constructor (name) {
		if (!name) {
			throw new Error(`Storge requires an argument.`);
		}
		this.whenReady = Promise.resolve();
		this.name = name;
		this.filePath = path.join(process.cwd(), 'stores', `${name}.json`);
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
			.then(function (data) {
				return Promise.all([writeFile(filePath, data), data]);
			}).then(function ([, data]) {
				return data[key];
			});
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
			.then(function (data) {
				return Promise.all([writeFile(filePath, data), data]);
			}).then(function () {
				return true;
			});

		return this.whenReady;
	}
}

let storage = new Storage('data');


storage.set('33', '2');

storage.get('33');

storage.remove('33');