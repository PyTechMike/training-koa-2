import path from 'path';


import { readFile, writeFile } from '../services/fs.service';

function getDataLength (filePath) {
	// let	whenReady = Promise.resolve()
	// 		.then(function () {
	// 			return readFile(filePath);
	// 		})
	// 		.then(JSON.parse)
	// 		.then(function (data) {
	// 			return Object.keys(data).length;
	// 		});

	// return whenReady; readFileSync
	return Object.keys(JSON.parse(readFile(filePath))).length;
}


export default class Storage {
	constructor (name) {
		if (!name) {
			throw new Error(`Storge requires an argument.`);
		}
		this.whenReady = Promise.resolve();
		this.name = name;
		this.filePath = path.join(process.cwd(), 'stores', `${name}.json`);

		// this.id = getDataLength(this.filePath);
	}
	get (key) {
		let filePath = this.filePath;

		this.whenReady = this.whenReady
			.then(function () {
				return readFile(filePath);
			})
			.then(JSON.parse)
			.then(function (data) {
				if (arguments.length > 0) {
					if (key in data) {
						return data[key];
					}
					throw new Error(`${key} is not exist in this data.`);
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
				return Promise.all([JSON.parse(data), Object.keys(JSON.parse(data)).length]);
			})
			.then(function ([data, id]) {
				let nowId = id;

				if (id > -1) {
					while (nowId) {
						// for (let todo in data) {
						// 	allData.push(data[todo]);
						// }

						console.log(nowId);
						if (data[nowId]) {
							allData.push(data[nowId]);
						}
						nowId -= 1;
					}
				}
				return allData;

				// }
				// throw new Error(`Error in get all data.`);
			});

		return this.whenReady;
	}
	set (value) {
		let filePath = this.filePath;
		let nowId;

		this.whenReady = this.whenReady
			.then(function () {
				return readFile(filePath);
			})
			.then(function (data) {
				return Promise.all([JSON.parse(data), Object.keys(JSON.parse(data)).length]);
			})
			.then(function ([data, id]) {
				nowId = id;
				data[nowId + 1] = value;
				return data;
			})
			.then(JSON.stringify)
			.then(function (data) {
				return Promise.all([writeFile(filePath, data), data]);
			}).then(function ([, data]) {
				return data[nowId + 1];
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