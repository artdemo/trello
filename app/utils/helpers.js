export function getNextId(arr) {
	return arr.length ? arr[arr.length - 1].id + 1 : 0;
}
