const diagonalSum = (size) => {
	let sum = 1

	for (let i = 3; i <= size; i += 2) {
		sum += 4 * (i * i) - 6 * (i - 1)
	}
	return sum
}

const generateMatrix = (size) => {
	let matrix = []
	let sum = 1
	for (let i = 0; i < size; i++) {
		let row = []

		for (let j = 0; j < size; j++) {
			if (i === j || i + j === size - 1) {
				if (sum % 2 === 0) row.push((sum = sum + 2))
				else row.push(1)
			} else {
				row.push(0)
			}
		}
		matrix.push(row)
	}
	return matrix
}

module.exports = { diagonalSum, generateMatrix }
