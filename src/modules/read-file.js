import { fsReadFile } from '../services/fs.service';

export default function readFile (filePath) {
	return fsReadFile(filePath);
}