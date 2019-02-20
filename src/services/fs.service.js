import fs from 'fs';

export function readFile (filePath) {
	return new Promise(function (resolve, reject) {
		fs.readFile(filePath, function (err, data) {
			if (err) {
				return reject(err);
			}
			resolve(data);
		});
	});
}

export function writeFile (filePath, content) {
	return new Promise(function (resolve, reject) {
		fs.writeFile(filePath, content, function (err) {
			if (err) {
				return reject(err);
			}
			resolve(content);
		});
	});
}