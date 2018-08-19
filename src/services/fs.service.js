import fs from 'fs';

function checkFile (filePath) {
	if (!fs.existsSync(filePath)) {
		fs.appendFileSync(filePath, '{}');
	}
}


function parsedData (filePath) {
	return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeData (filePath, data) {
	fs.writeFileSync(filePath, JSON.stringify(data));
}

function getData (filePath, key) {
	if (key in parsedData(filePath)) {
		return parsedData(filePath)[key];
	}
	throw new Error(`${key} is not exist in this data.`);
}

function setData (filePath, key, value) {
	let readyData = parsedData(filePath);

	readyData[key] = value;
	writeData(filePath, readyData);
}

function removeData (filePath, key) {
	let readyData = parsedData(filePath);

	if (key in readyData) {
		delete readyData[key];
	}
	else {
		throw new Error(`${key} is not exist in this data.`);
	}
	writeData(filePath, readyData);
}

let fileSystem;

export default fileSystem = {
	get (filePath, key) { // Promise version need
		checkFile(filePath);
		return getData(filePath, key);
	},
	set (filePath, key, value) {
		checkFile(filePath);
		setData(filePath, key, value);
		return value;
	},
	remove (filePath, key) {
		checkFile(filePath);
		removeData(filePath, key);
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