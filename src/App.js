import GameController from "./controllers/GameController.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import { MESSAGE } from "./constants/messages.js";

class App {
  async run() {
    const nameInput = await InputView.askInput(MESSAGE.ASK_CAR_NAME);
    const finalRoundInput = await InputView.askInput(MESSAGE.ASK_FINAL_ROUND);
    const gameController = new GameController();

    gameController.initialize(nameInput, finalRoundInput);
    gameController.runGame();
    OutputView.printResult(gameController.getGameResult());
    OutputView.printWinners(gameController.getGameWinners());
  }
}

export default App;
