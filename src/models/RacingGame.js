import { Random } from "@woowacourse/mission-utils";

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
    if (finalRound <= 0 || finalRound > 100) {
      throw new Error("[ERROR] 시도할 횟수는 1이상 100이하 숫자만 입력해주세요.");
    }
  }

  run() {
    for (let round = 0; round < this.#finalRound; round++) {
      this.playRound();
    }
  }

  playRound() {
    this.#cars.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);

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
    const winningCars = this.#cars.filter((car) => car.compareTo(farthestCar) === 0);
    return winningCars.map((winningCar) => winningCar.getState());
  }
}

export default RacingGame;
