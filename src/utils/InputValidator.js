class InputValidator {
  static checkEmpty(userInput) {}

  static checkInteger(userInput) {}

  checkDuplication(names) {
    const nameSet = new Set(names);

    if (nameSet.size() !== names.length) {
      throw new Error("[ERROR] 서로 다른 이름을 입력해주세요. ");
    }
  }

  check;
}

export default InputValidator;
