function parser() {
	let frequencyChanges;
	let totalChange = 0;
	const map = {};
	const collection = document.getElementsByTagName('PRE');
	for (let i = 0; i < collection.length; i++) {
		frequencyChanges = collection[i].innerText.split('\n');
	}
	return frequencyChanges;
}

function findDupes() {
	const frequencyChanges = parser();
	let count2 = 0;
	let count3 = 0;
	for (let i = 0; i < frequencyChanges.length - 1; i++) {
		const map = {};
		const str = frequencyChanges[i];
		for (let j = 0; j < str.length; j++) {
			const letter = str[j];
			if (map[letter]) {
				map[letter]++;
			} else {
				map[letter] = 1;
			}
		}
		let localCount2 = 0;
		let localCount3 = 0;
		for (letter in map) {
			if (map[letter] === 2) {
				localCount2++;
			}
			if (map[letter] === 3) {
				localCount3++;
			}
		}

		if (localCount2 > 0) {
			count2++;
		}
		if (localCount3 > 0) {
			count3++;
		}
	}
	const checkSum = count2 * count3;
	console.log(checkSum);
}

//findDupes();

const boxes = parser();

function commonBoxes(boxes) {
	const matchingIdxs = [];
	const matchingStrings = [];
	for (let i = 0; i < boxes.length - 1; i++) {
		const str = boxes[i];
		//console.log('str: ', str);
		for (let j = 1; j < boxes.length - 2; j++) {
			let tempStr = '';
			const nextStr = boxes[j];
			//console.log('nextStr: ', nextStr);
			for (let k = 0; k < str.length; k++) {
				const letter = str[k];
				if (letter === nextStr[k]) {
					tempStr += str[k];
				}
			}
			if (tempStr.length === str.length - 1) {
				matchingIdxs.push(i, j);
			} else {
				tempStr = '';
			}
		}
	}
	matchingStrings.push(boxes[matchingIdxs[0]], boxes[matchingIdxs[1]]);
	let common = '';
	for (let i = 0; i < matchingStrings[0].length; i++) {
		if (matchingStrings[0][i] === matchingStrings[1][i]) {
			common += matchingStrings[0][i];
		}
	}

	console.log(common);
}
commonBoxes(boxes);
