import { ERROR_MESSAGE } from "../constants/messages.js";
import { GAME_CONFIG } from "../constants/gameConfig.js";

class NameValidator {
  static checkDuplication(names) {
    const nameSet = new Set(names);

    if (nameSet.size !== names.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
    }
  }

  static checkMinimum(names) {
    if (names.length < GAME_CONFIG.MIN_NAME_COUNT) {
      throw new Error(ERROR_MESSAGE.TOO_FEW_NAMES);
    }
  }

  static checkMaximum(names) {
    if (names.length > GAME_CONFIG.MAX_NAME_COUNT) {
      throw new Error(ERROR_MESSAGE.TOO_MANY_NAMES);
    }
  }

  static checkEmptyString(names) {
    names.forEach((name) => {
      if (!name) {
        throw new Error(ERROR_MESSAGE.EMPTY_NAME);
      }
    });
  }
}

export default NameValidator;
