import { Console } from "@woowacourse/mission-utils";

class InputView {
  static async askInput(message) {
    return await Console.readLineAsync(message);
  }
}

export default InputView;
