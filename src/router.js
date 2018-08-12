// import Router from 'koa-router';

// let router = new Router();

// export default router
// 	.get('/r', function ({ response }) {
// 		response.body = { 'name': 'Mike' };
// 	})
// 	.get('/users/:date', function ({ response, params }) {
// 		console.log(params);
// 	});
// let Router = require('koa-router');

// let router = new Router();

// let users = [
// 	'RwWQE', 'RWAAD'
// ];


// export default router
// 	.get('/', function ({ response }) {
// 		return new Promise(function (resolve, reject) {
// 			resolve();
// 		}).then(function () {
// 			return response.body = { details: 'https://openrates.io' };

// 		});
// 	})
// 	.get('/latest', function ({ response, query }) {
// 		console.log(query);
// 		response.body = {
// 			base: 'EUR', date: '2018-06-11', rates: {
// 				AUD: 1.5501, BGN: 1.9558
// 			}
// 		};
// 	})
// 	.get('/:date', function ({ response, params, query	}) {
// 		console.log(query);
// 		response.body = {
// 			base: 'EUR', date: params.date, rates: {
// 				AUD: 1.5346, CAD: 1.4577
// 			}
// 		};
// 	});