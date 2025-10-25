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

  static checkDuplication(names) {
    const nameSet = new Set(names);

    if (nameSet.size() !== names.length) {
      throw new Error("[ERROR] 서로 다른 이름을 입력해주세요. ");
    }
  }

  static checkMinimum(names) {
    if (names.length < 2) {
      throw new Error("[ERROR] 이름을 2개 이상 입력해주세요. ");
    }
  }

  static checkMaximum(names) {
    if (names.length > 100) {
      throw new Error("[ERROR] 이름을 2개 이상 입력해주세요. ");
    }
  }
}

export default InputValidator;
