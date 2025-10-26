import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printResult(cars) {
    Console.print("실행 결과");

    cars.forEach((car) => {
      const { name, position } = car.getStatus();
      Console.print(`${name} : ${"-".repeat(position)}`);
    });
  }

  static printWinners(cars) {
    const winnerNames = cars.map((car) => {
      const { name } = car.getStatus();
      return name;
    });

    Console.print(`최종 우승자 : ${winnerNames.join(", ")}`);
  }
}

export default OutputView;
