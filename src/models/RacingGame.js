import { Random } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../constants/messages.js";
import { GAME_CONFIG } from "../constants/gameConfig.js";

class RacingGame {
  #cars;
  #finalRound;

  constructor(finalRound, cars) {
    this.#validate(finalRound);
    this.#finalRound = finalRound;
    this.#cars = [...cars];
  }

  getCarStates() {
    return this.#cars.map((car) => car.getState());
  }

  #validate(finalRound) {
    if (finalRound < GAME_CONFIG.MIN_ROUND || finalRound > GAME_CONFIG.MAX_ROUND) {
      throw new Error(ERROR_MESSAGE.INVALID_FINAL_ROUND);
    }
  }

  run() {
    for (let round = 0; round < this.#finalRound; round++) {
      this.playRound();
    }
  }

  playRound() {
    this.#cars.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(GAME_CONFIG.MIN_RANDOM, GAME_CONFIG.MAX_RANDOM);

      if (randomNumber >= GAME_CONFIG.MOVE_THRESHOLD) {
        car.move();
      }
    });
  }

  findFarthestCar() {
    let farthestCar = this.#cars[0];

    this.#cars.forEach((car) => {
      if (car.compareTo(farthestCar) > 0) {
        farthestCar = car;
      }
    });

    return farthestCar;
  }

  getWinners(farthestCar) {
    const winningCars = this.#cars.filter((car) => car.compareTo(farthestCar) === 0);
    return winningCars.map((winningCar) => winningCar.getState());
  }
}

export default RacingGame;
