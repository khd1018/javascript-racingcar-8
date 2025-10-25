import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printResult(cars) {
    Console.print("실행 결과");

    cars.forEach((car) => {
      const { name, position } = car.getStatus();
      Console.print(`${name} : ${"-".repeat(position)}`);
    });
  }

  static printWinners() {}
}

export default OutputView;
