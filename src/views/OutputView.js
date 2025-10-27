import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/messages.js";
import { GAME_CONFIG } from "../constants/gameConfig.js";

class OutputView {
  static printResult(carStates) {
    Console.print(MESSAGE.RESULT_HEADER);

    carStates.forEach((carState) => {
      const { name, position } = carState;
      Console.print(`${name} : ${GAME_CONFIG.POSITION_MARK.repeat(position)}`);
    });
  }

  static printWinners(winningCars) {
    const winnerNames = winningCars.map((winningCar) => winningCar.name);

    Console.print(`${MESSAGE.WINNER_ANNOUNCEMENT}${winnerNames.join(GAME_CONFIG.NAME_DELIMITER)}`);
  }
}

export default OutputView;
