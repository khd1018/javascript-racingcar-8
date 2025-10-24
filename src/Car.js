class Car {
  #name;
  #position;

  constructor(carName, startPosition = 0) {
    this.#name = carName;
    this.#position = startPosition;
  }

  move() {
    this.#position++;
  }

  isFartherThan(maxDistanceCar) {
    return this.#position > maxDistanceCar.position;
  }
}

export default Car;
