import { ERROR_MESSAGE } from "../constants/messages.js";
import { GAME_CONFIG } from "../constants/gameConfig.js";

class InputValidator {
  static checkEmpty(userInput) {
    if (!userInput) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  static checkNumber(userInput) {
    if (!Number.isInteger(Number(userInput))) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
  }

  static checkDelimiter(userInput) {
    const names = userInput.split(GAME_CONFIG.NAME_DELIMITER);

    if (names.length < GAME_CONFIG.MIN_NAME_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_DELIMITER);
    }
  }
}

export default InputValidator;
