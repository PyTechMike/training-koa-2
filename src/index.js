// import Koa from 'koa';
// import router from './router';

import Koa from 'koa';

import Storage from './classes/storage';

export default new Koa()
	.on('error', function (err, ctx) {
		console.error(err, ctx);
	});

// function wait (ms, callback) {
// 	let startTime = new Date();

// 	setTimeout(function () {
// 		let endTime = Number(new Date()) - Number(startTime);

// 		callback(endTime);
// 	}, ms);
// }

// function delay (ms) {
// 	return new Promise(function (resolve) {
// 		wait(ms, resolve);
// 	});
// }

// delay(100).then(function (time) {
// 	console.log(time);
// 	return time;
// }).catch(function (err) {
// 	console.error(err);
// });

// wait(100, function (time) {
// 	console.log(time);
// });
// let storage = new Storage('src/data.json');


// storage.set('test3', 12);
// storage.set('test5', 12);

// storage.remove('test5');

// storage.get('test5', 12);

// storage.get('test2').then(function (val) {
// 	console.log(val);
// 	return;
// }).catch(function (err) {
// 	console.error(err);
// });