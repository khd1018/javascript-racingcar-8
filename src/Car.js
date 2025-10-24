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
}

export default car;
