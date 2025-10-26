import NameValidator from "../src/utils/NameValidator";

describe("NameValidator 테스트", () => {
  test("중복 이름이 있으면 Error를 발생시킬 수 있다. ", () => {
    const names = ["messi", "ronaldo", "messi"];

    expect(() => NameValidator.checkDuplication(names)).toThrow("[ERROR]");
  });

  test("이름이 하나이면 Error를 발생시킬 수 있다.", () => {
    const names = ["messi"];

    expect(() => NameValidator.checkMinimum(names)).toThrow("[ERROR]");
  });

  test("이름이 5개 이상이면 Error를 발생시킬 수 있다.", () => {
    const names = new Array(101).fill("apple");

    expect(() => NameValidator.checkMaximum(names)).toThrow("[ERROR]");
  });

  test("이름중에 빈 문자열이 있다면 Error를 발생시킬 수 있다.", () => {
    const names = ["messi", "ronaldo", "", "carlos"];
    expect(() => NameValidator.checkEmptyString(names)).toThrow("[ERROR]");
  });
});
