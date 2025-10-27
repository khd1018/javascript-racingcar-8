const MESSAGE = {
  ASK_CAR_NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  ASK_FINAL_ROUND: "시도할 횟수는 몇 회인가요?\n",
  ERROR: {
    EMPTY_INPUT: "[ERROR] 값을 입력해주세요.",
    NOT_A_NUMBER: "[ERROR] 숫자를 입력해주세요.",
    DUPLICATE_NAME: "[ERROR] 서로 다른 이름을 입력해주세요. ",
    EMPTY_NAME: "[ERROR] 이름을 입력해주세요. ",
    TOO_FEW_NAMES: "[ERROR] 이름을 2개 이상 입력해주세요. ",
    TOO_MANY_NAMES: "[ERROR] 이름을 100개 이하로 입력해주세요. ",
    INVALID_DELIMITER: "[ERROR] 이름을 쉼표(,)로 구분해서 입력해주세요. ",
    INVALID_NAME_LENGTH: "[ERROR] 자동차 이름은 5자 이하만 가능합니다.",
    INVALID_FINAL_ROUND: "[ERROR] 시도할 횟수는 1이상 100이하 숫자만 입력해주세요.",
  },
};

export default MESSAGE;
