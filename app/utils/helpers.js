export function getNextId(arr) {
	return arr.length ? arr[arr.length - 1].id + 1 : 0;
}

export function throttle(fnToThrottle, msDelay) {
	let isThrottled = false,
		isPending = false;

	return () => {
		if (isThrottled) {
			isPending = true;
			return;
		}

		fnToThrottle();
		isThrottled = true;

		setTimeout(() => {
			isThrottled = false;

			if (isPending) {
				fnToThrottle();
				isPending = false;
			}
		}, msDelay);
	};
}
