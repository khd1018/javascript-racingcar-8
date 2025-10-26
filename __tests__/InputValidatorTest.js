import InputValidator from "../src/utils/InputValidator";

describe("InputValidator 테스트", () => {
  test("입력 문자열이 빈 문자열이면 Error를 발생시킬 수 있다. ", () => {
    const userInput = "";
    expect(() => InputValidator.checkEmpty(userInput)).toThrow("[ERROR]");
  });

  test("입력 문자열이 숫자가 아니라면 Error를 발생시킬 수 있다.", () => {
    const userInput = "messi";

    expect(() => InputValidator.checkNumber(userInput)).toThrow("[ERROR]");
  });

  test.each(["a.b.c", "a:b:c"])("이름이 쉼표로 구분되어 있지 않다면 Error를 발생시킬 수 있다.", (userInput) => {
    expect(() => InputValidator.checkDelimiter(userInput)).toThrow("[ERROR]");
  });
});
