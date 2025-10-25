class Car {
  #name;
  #position;

  constructor(carName, startPosition = 0) {
    this.#name = carName;
    this.#position = startPosition;
  }

  getStatus() {
    return {
      name: this.#name,
      position: this.#position,
    };
  }

  move() {
    this.#position++;
  }

  compareTo(farthestCar) {
    return this.#position - farthestCar.position;
  }
}

export default Car;
