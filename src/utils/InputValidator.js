class InputValidator {
  static checkEmpty(userInput) {
    if (!userInput.length) {
      throw new Error("[ERROR] 값을 입력해주세요.");
    }
  }

  static checkNumber(userInput) {
    if (!Number.isInteger(Number(userInput))) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
  }

  static checkDelimiter(userInput) {
    const names = userInput.split(",");

    if (names.length < 2) {
      throw new Error("[ERROR] 이름을 쉼표(,)로 구분해서 입력해주세요. ");
    }
  }
}

export default InputValidator;
