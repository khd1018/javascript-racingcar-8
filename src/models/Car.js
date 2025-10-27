import { ERROR_MESSAGE } from "../constants/messages.js";
import { GAME_CONFIG } from "../constants/gameConfig.js";

class Car {
  #name;
  #position;

  constructor(carName, startPosition = 0) {
    this.#validate(carName);
    this.#name = carName;
    this.#position = startPosition;
  }

  #validate(carName) {
    if (carName.length > GAME_CONFIG.MAX_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
    }
  }

  getState() {
    return {
      name: this.#name,
      position: this.#position,
    };
  }

  move() {
    this.#position++;
  }

  compareTo(farthestCar) {
    return this.#position - farthestCar.#position;
  }
}

export default Car;
