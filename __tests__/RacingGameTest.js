import RacingGame from "../src/models/RacingGame";
import CarFactory from "../src/factories/CarFactory";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("RacingGame 테스트", () => {
  const names = ["messi", "park", "son"];
  const cars = CarFactory.createCars(names);

  test.each([[0], [101]])("시도횟수가 1보다 작거나 100보다 크면 Error를 발생시킬 수 있다. ", (finalRound) => {
    expect(() => new RacingGame(finalRound, cars)).toThrow("[ERROR]");
  });

  const numbers = [5, 3, 5];
  const finalRound = 1;

  mockRandoms(numbers);

  const racingGame = new RacingGame(finalRound, cars);
  racingGame.run();
  const farthestCar = racingGame.findFarthestCar();

  test("가장 멀리 이동한 자동차를 반환할 수 있다.", () => {
    expect(farthestCar.getState()).toStrictEqual({ name: "messi", position: 1 });
  });

  test("최종 우승한 자동차들을 반환할 수 있다.", () => {
    const winnerCars = racingGame.getWinners(farthestCar);

    expect(winnerCars).toStrictEqual([
      { name: "messi", position: 1 },
      { name: "son", position: 1 },
    ]);
  });
});
