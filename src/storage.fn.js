import { compose } from 'ramda';

import getStoragePathByName from './modules/get-storage-path-by-name';
import readFile from './modules/read-file';
import parseJSON from './modules/parse-json';
import getAll from './modules/get-all';

export let getAllItemsFrom = compose(
	getAll,
	parseJSON,
	readFile,
	getStoragePathByName
);