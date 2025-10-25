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

  checkDuplication(names) {
    const nameSet = new Set(names);

    if (nameSet.size() !== names.length) {
      throw new Error("[ERROR] 서로 다른 이름을 입력해주세요. ");
    }
  }

  checkMinimum(names) {
    if (names.length < 2) {
      throw new Error("[ERROR] 이름을 2개 이상 입력해주세요. ");
    }
  }

  checkMaximum(name) {}
}

export default InputValidator;
