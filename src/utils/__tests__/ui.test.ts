import * as ui from "../ui";

describe("uuid", () => {
  it("generates a random string", () => {
    const uuid = ui.uuid();
    expect(uuid).toBeDefined();
    expect(typeof uuid).toBe("string");
  });
});
