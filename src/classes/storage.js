import fs from '../services/fs.service';
export default class Storage{
	constructor(filePass) {
		this.filePass = filePass || 0;
	}
	get(key) {
		return new Promise(function(resolve, reject) {
			let value = fs.get(this.filePass, key);
			resolve(value);
		})
	}
	set(key, value) {
		return new Promise(function(resolve, reject) {
			fs.set(this.filePass, key, value);
			resolve(value);
		})
	}
	remove(key) {
		return new Promise(function(resolve, reject) {
			fs.remove(this.filePass, key);
			resolve();
		})
	}
}
