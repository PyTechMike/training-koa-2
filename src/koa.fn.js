import { curry } from 'ramda';

export let respondRequest = curry(function (ctx, data) {
	return ctx.response.body = data;
});