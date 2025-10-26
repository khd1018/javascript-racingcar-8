class NameValidator {
  static checkDuplication(names) {
    const nameSet = new Set(names);

    if (nameSet.size !== names.length) {
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
      throw new Error("[ERROR] 이름을 100개 이하로 입력해주세요. ");
    }
  }
}

export default NameValidator;
