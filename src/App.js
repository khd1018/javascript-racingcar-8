import GameController from "./controllers/GameController";
import InputView from "./views/InputView";
import OutputView from "./views/OutputView";

class App {
  async run() {
    const nameInput = await InputView.askInput();
    const finalRoundInput = await InputView.askInput();
    const gameController = new GameController();

    gameController.initialize(nameInput, finalRoundInput);
    gameController.runGame();
    OutputView.printResult(gameController.getGameResult());
    OutputView.printWinners(gameController.getGameWinners());
  }
}

export default App;
