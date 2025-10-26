import Car from "../src/models/Car";

describe("Car 테스트", () => {
  test("이름이 5자를 초과하는 경우 Error를 발생시킬 수 있다 ", () => {
    const name = "abcdef";

    expect(() => new Car(name)).toThrow("[ERROR]");
  });
});
