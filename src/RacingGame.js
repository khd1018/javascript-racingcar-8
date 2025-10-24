import { Random } from "@woowacourse/mission-utils";

class RacingGame {
  #cars;

  constructor(cars) {
    this.#cars = [...cars];
  }

  run(finalRound) {
    for (let round = 1; round <= finalRound; round++) {
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
}

export default RacingGame;
