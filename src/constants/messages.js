import { GAME_CONFIG } from "./gameConfig.js";

const ERROR_PREFIX = "[ERROR]";

const MESSAGE = {
  ASK_CAR_NAME: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${GAME_CONFIG.NAME_DELIMITER}) 기준으로 구분)\n`,
  ASK_FINAL_ROUND: "시도할 횟수는 몇 회인가요?\n",
  RESULT_HEADER: "실행 결과",
  WINNER_ANNOUNCEMENT: "최종 우승자 : ",
};

const ERROR_MESSAGE = {
  EMPTY_INPUT: `${ERROR_PREFIX} 값을 입력해주세요.`,
  NOT_A_NUMBER: `${ERROR_PREFIX} 숫자를 입력해주세요.`,
  DUPLICATE_NAME: `${ERROR_PREFIX} 서로 다른 이름을 입력해주세요. `,
  EMPTY_NAME: `${ERROR_PREFIX}이름을 입력해주세요. `,
  TOO_FEW_NAMES: `${ERROR_PREFIX} 이름을 ${GAME_CONFIG.MIN_NAME_COUNT}개 이상 입력해주세요. `,
  TOO_MANY_NAMES: `${ERROR_PREFIX} 이름을 ${GAME_CONFIG.MAX_NAME_COUNT}개 이하로 입력해주세요. `,
  INVALID_DELIMITER: `${ERROR_PREFIX} 이름을 쉼표(${GAME_CONFIG.NAME_DELIMITER})로 구분해서 입력해주세요. `,
  INVALID_NAME_LENGTH: `${ERROR_PREFIX} 자동차 이름은 ${GAME_CONFIG.MAX_NAME_LENGTH}자 이하만 가능합니다.`,
  INVALID_FINAL_ROUND: `${ERROR_PREFIX} 시도할 횟수는 ${GAME_CONFIG.MIN_ROUND}이상 ${GAME_CONFIG.MAX_ROUND}이하 숫자만 입력해주세요.`,
};

export { MESSAGE, ERROR_MESSAGE };
