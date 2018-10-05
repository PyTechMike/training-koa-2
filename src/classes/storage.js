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

	get (todoId) {
		let filePath = this.filePath;

		this.whenReady = this.whenReady
			.then(function () {
				return readFile(filePath);
			})
			.then(JSON.parse)
			.then(function (data) {
				if (arguments.length > 0) {
					if (todoId in data) {
						return data[todoId];
					}

					// throw new Error(`${todoId} is not exist in this data.`);
				}
				return data;
			});

		return this.whenReady;
	}
	getAll () {
		let filePath = this.filePath;
		let allData = [];

		this.whenReady = this.whenReady
			.then(function () {
				return readFile(filePath);
			})
			.then(function (data) {
				return JSON.parse(data);
			})
			.then(function (data) {
				for (let todoId in data) {
					allData.push(data[todoId]);
				}
				return allData;
			});

		return this.whenReady;
	}
	add (value) {
		let filePath = this.filePath;
		let newId = 0;

		this.whenReady = this.whenReady
			.then(function () {
				return readFile(filePath);
			})
			.then(function (data) {
				return JSON.parse(data);
			})
			.then(function (data) {
				for (let todoId in data) {
					if (todoId !== undefined) {
						if (todoId > newId) {
							newId = Number(todoId);
						}
					}
				}
				if (Object.keys(data).length === 0) {
					newId = 0;
				}
				else {
					newId += 1;
				}
				data[newId] = value;
				return data;
			})
			.then(JSON.stringify)
			.then(function (data) {
				return Promise.all([writeFile(filePath, data), data]);
			}).then(function ([, data]) {
				return JSON.parse(data)[newId];
			});
		return this.whenReady;
	}
	update (value, todoId) {
		let filePath = this.filePath;

		this.whenReady = this.whenReady
			.then(function () {
				return readFile(filePath);
			})
			.then(function (data) {
				return JSON.parse(data);
			})
			.then(function (data) {
				if (todoId in data) {
					Object.assign(data[todoId], value);
				}
				return data;
			})
			.then(JSON.stringify)
			.then(function (data) {
				return Promise.all([writeFile(filePath, data), data]);
			}).then(function ([, data]) {
				if (data[todoId]) {
					return JSON.parse(data)[todoId];
				}
				return false;
			});
		return this.whenReady;
	}
	remove (todoId) {
		let filePath = this.filePath;

		this.whenReady = this.whenReady
			.then(function () {
				return readFile(filePath);
			})
			.then(JSON.parse)
			.then(function (data) {
				if (todoId in data) {
					delete data[todoId];
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