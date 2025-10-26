class Car {
  #name;
  #position;

  constructor(carName, startPosition = 0) {
    this.#validate(carName);
    this.#name = carName;
    this.#position = startPosition;
  }

  #validate(carName) {
    if (carName.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
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
