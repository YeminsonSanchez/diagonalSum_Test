const { diagonalSum, generateMatrix } = require('./app.js')

describe('Pruebas a diagonalSum', () => {
	test('diagonalSum(5) debe dar como salida 101', () => {
		expect(diagonalSum(5)).toBe(101)
	})

	test('diagonalSum(3) debe dar como salida 25', () => {
		expect(diagonalSum(3)).toBe(25)
	})

	test('diagonalSum(1) debe dar como salida 1', () => {
		expect(diagonalSum(1)).toBe(1)
	})

	test('diagonalSum(7) debe dar como salida 261', () => {
		expect(diagonalSum(7)).toBe(261)
	})

	test('diagonalSum(9) debe dar como salida 537', () => {
		expect(diagonalSum(9)).toBe(537)
	})

	test('diagonalSum(11) debe dar como salida 961', () => {
		expect(diagonalSum(11)).toBe(961)
	})

	test('diagonalSum(1003) debe dar como salida 673189025', () => {
		expect(diagonalSum(1003)).toBe(673189025)
	})

	test('diagonalSum(10003) debe dar como salida 667316890025', () => {
		expect(diagonalSum(10003)).toBe(667316890025)
	})
})

describe('generateMatrix', () => {
	const arrMatrix = [
		[1, 0, 0, 0, 1],
		[0, 1, 0, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 0, 1, 0],
		[1, 0, 0, 0, 1],
	]

	test('Generar una matrix de 5x5 resaltando los diagonales directos con un 1 pasando como parametro solo el numero 5', () => {
		expect(generateMatrix(5)).toEqual(arrMatrix)
	})
})
