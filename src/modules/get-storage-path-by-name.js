import path from 'path';

export default function getStoragePathByName (name) {
	return path.join(process.cwd(), 'stores', `${name}.json`);
}