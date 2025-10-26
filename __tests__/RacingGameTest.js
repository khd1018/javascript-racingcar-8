import RacingGame from "../src/models/RacingGame";
import CarFactory from "../src/factories/CarFactory";

describe("RacingGame 테스트", () => {
  const names = ["messi", "park", "son"];
  const cars = CarFactory.createCars(names);

  test.each([[0], [101]])("시도횟수가 1보다 작거나 100보다 크면 Error를 발생시킬 수 있다. ", (finalRound) => {
    expect(() => new RacingGame(finalRound, cars)).toThrow("[ERROR]");
  });
});
