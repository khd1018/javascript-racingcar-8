import InputValidator from "../utils/InputValidator.js";
import NameValidator from "../utils/NameValidator.js";
import RacingGame from "../models/RacingGame.js";
import CarFactory from "../factories/CarFactory.js";

class GameController {
  #racingGame;

  initialize(nameInput, finalRoundInput) {
    this.#validateInputs(nameInput, finalRoundInput);
    const cars = CarFactory.createCars(this.#parseNames(nameInput));
    this.#racingGame = new RacingGame(Number(finalRoundInput), cars);
  }

  runGame() {
    this.#racingGame.run();
  }

  getGameResult() {
    return this.#racingGame.getCarStates();
  }

  getGameWinners() {
    const farthestCar = this.#racingGame.findFarthestCar();
    return this.#racingGame.getWinners(farthestCar);
  }

  #parseNames(nameInput) {
    const names = nameInput.split(",");
    this.#validateNames(names);
    return names;
  }

  #validateInputs(nameInput, finalRoundInput) {
    InputValidator.checkEmpty(nameInput);
    InputValidator.checkDelimiter(nameInput);

    InputValidator.checkEmpty(finalRoundInput);
    InputValidator.checkNumber(finalRoundInput);
  }

  #validateNames(names) {
    NameValidator.checkDuplication(names);
    NameValidator.checkMinimum(names);
    NameValidator.checkMaximum(names);
    NameValidator.checkEmptyString(names);
  }
}

export default GameController;
