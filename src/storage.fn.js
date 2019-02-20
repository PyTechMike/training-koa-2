import { composeP } from 'ramda';

import getStoragePathByName from './modules/get-storage-path-by-name';
import { readFile } from './services/fs.service';
import parseJSON from './modules/parse-json';
import getAll from './modules/get-all';

export let getAllItemsFrom = composeP(
	getAll,
	parseJSON,
	readFile,
	getStoragePathByName
);