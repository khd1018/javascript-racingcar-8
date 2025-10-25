import { Random } from "@woowacourse/mission-utils";

class RacingGame {
  #cars;
  #finalRound;

  constructor(finalRound, cars) {
    this.#validate(finalRound);
    this.#finalRound = finalRound;
    this.#cars = [...cars];
  }

  #validate(finalRound) {}

  run() {
    for (let round = 1; round <= this.#finalRound; round++) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      this.playRound(randomNumber);
    }
  }

  playRound(randomNumber) {
    this.#cars.forEach((car) => {
      if (randomNumber >= 4) {
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
    return this.#cars.filter((car) => car.compareTo(farthestCar) === 0);
  }
}

export default RacingGame;
