import formatDate from "./formatterDate";

describe("formatDateCurrent function", () => {
  test("should return a formatted date string", () => {
    const actual = new Date(2023, 7, 17, 12, 7, 44, 9);
    const formattedDate = formatDate(actual);

    expect(formattedDate).toBe("2023-08-17T12:07:44-0000");
  });
});
