import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printResult(carStates) {
    Console.print("실행 결과");

    carStates.forEach((carState) => {
      const { name, position } = carState;
      Console.print(`${name} : ${"-".repeat(position)}`);
    });
  }

  static printWinners(winningCars) {
    const winnerNames = winningCars.map((winningCar) => winningCar.name);

    Console.print(`최종 우승자 : ${winnerNames.join(", ")}`);
  }
}

export default OutputView;
