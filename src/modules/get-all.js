
export default function getAll (data) {
	let allTodos = [];

	for (let todo in data) {
		allTodos.push(data[todo]);
	}
	return allTodos;
}