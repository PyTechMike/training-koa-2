module.exports = function (ctx, next) {
	return next().catch(function (err) {
		ctx.status = err.statusCode || err.status || 500;
		ctx.body = err.message;
	});
};