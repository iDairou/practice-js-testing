import randomNumber from './app';
it("return 1 when min is 1 and max is 1", () => {
	const number = randomNumber(1, 1);
	expect(number).toBe(1);
});
