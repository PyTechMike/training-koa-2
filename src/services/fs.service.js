import fr from 'fs';

const fs = require('fs');

function checkFile (filePass) {
	if (!fs.existsSync(filePass)) {
		fs.appendFileSync(filePass, '{}');
	}
}

function parsedData (filePass) {
	return JSON.parse(fs.readFileSync(filePass, 'utf8'));
}

function writeData (filePass, data) {
	fs.writeFileSync(filePass, JSON.stringify(data));
}

function getData (filePass, key) {
	if (key in parsedData(filePass)) {
		return parsedData(filePass)[key];
	}
	throw new Error(`${key} is not exist in this data.`);

}

function setData (filePass, key, value) {
	let readyData = parsedData(filePass);

	readyData[key] = value;
	writeData(filePass, readyData);
}

function removeData (filePass, key) {
	let readyData = parsedData(filePass);

	if (key in readyData) {
		delete readyData[key];
	}
	else {
		throw new Error(`${key} is not exist in this data.`);
	}
	writeData(filePass, readyData);
}

let fileSystem;

export default fileSystem = {
	get (filePass, key) { // Promise version need
		checkFile(filePass);
		return getData(filePass, key);
	},
	set (filePass, key, value) {
		checkFile(filePass);
		setData(filePass, key, value);
		return value;
	},
	remove (filePass, key) {
		checkFile(filePass);
		removeData(filePass, key);
		return true;
	}
};

// console.log(fileSystem.set('src/database/data.json', 'key1', 'val1'));
// console.log(fileSystem.set('src/database/data.json', 'skey2', 'val2'));
// console.log(fileSystem.remove('src/database/data.json', 'key2'));
// console.log(fileSystem.get('src/database/data.json', 'key1'));

// Promise.resolve().then(function () {
// 	promise();
// }).then(function (val) {
// });