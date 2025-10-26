import GameController from "./controllers/GameController.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
  async run() {
    const nameInput = await InputView.askInput("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const finalRoundInput = await InputView.askInput("시도할 횟수는 몇 회인가요?");
    const gameController = new GameController();

    gameController.initialize(nameInput, finalRoundInput);
    gameController.runGame();
    OutputView.printResult(gameController.getGameResult());
    OutputView.printWinners(gameController.getGameWinners());
  }
}

export default App;
