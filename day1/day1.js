function newFunc() {
	let frequencyChanges;
	let totalChange = 0;
	const map = {};
	const collection = document.getElementsByTagName('PRE');
	for (let i = 0; i < collection.length; i++) {
		frequencyChanges = collection[i].innerText.split('\n');
	}

	let j = 0;
	while (j < frequencyChanges.length - 1) {
		const change = frequencyChanges[j];
		editedChange =
			change[0] === '+' ? parseInt(change.slice(1)) : parseInt(change);
		if (editedChange) {
			totalChange += editedChange;
			changeKey = totalChange.toString();
		}
		if (map[changeKey]) {
			console.log('changeKey: ', changeKey);
			return changeKey;
		} else {
			map[changeKey] = 1;
			if (j < frequencyChanges.length - 2) {
				j++;
			} else {
				j = 0;
			}
		}
	}
}

newFunc();
