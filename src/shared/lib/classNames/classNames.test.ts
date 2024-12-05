import { classNames } from "@/shared/lib/classNames/classNames";


describe("classNames", () => {
	test("with only first param", () => {
		expect(classNames("someClass")).toBe("someClass");
	});

	test("with additional param", () => {
		const expected = "someClass class1";
		expect(classNames("someClass", {}, ["class1"])).toBe(expected);
	});

	test("with mods param", () => {
		const expected = "someClass class1 hovered scrollable";
		expect(
			classNames("someClass", { hovered: true, scrollable: true }, [
				"class1",
			]),
		).toBe(expected);
	});
	test("with mods param and one mod is false", () => {
		const expected = "someClass class1 hovered";
		expect(
			classNames("someClass", { hovered: true, scrollable: false }, [
				"class1",
			]),
		).toBe(expected);
	});
	test("with mods param one mod is undefined", () => {
		const expected = "someClass class1 hovered";
		expect(
			classNames("someClass", { hovered: true, scrollable: undefined }, [
				"class1",
			]),
		).toBe(expected);
	});
});