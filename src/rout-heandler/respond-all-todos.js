import { compose } from 'ramda';

import { respondRequest } from '../koa.fn';
import { getAllItemsFrom } from '../storage.fn';

function respondAllTodos (ctx) {
	compose(
		respondRequest(ctx),
		getAllItemsFrom('todos'),
	)();
}

export default respondAllTodos;