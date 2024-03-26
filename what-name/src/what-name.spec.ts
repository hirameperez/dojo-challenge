import { whatName } from "./what-name";

describe("whatName", () => {
  it.each([
    [
      [
        {
          first: "Mercutio",
          last: null,
        },
        {
          first: "Tybalt",
          last: "Capulet",
        },
        {
          first: "Romeo",
          last: "Montague",
        },
      ],
      {
        last: "Capulet",
      },
      {
        first: "Tybalt",
        last: "Capulet",
      },
    ],
    [
      [
        {
          first: "Albert",
          last: "Einstein",
        },
        {
          first: "Nicola",
          last: "Tesla",
        },
        {
          first: "Isaac",
          last: "Newton",
        },
      ],
      {
        first: "Albert",
      },
      {
        first: "Albert",
        last: "Einstein",
      },
    ],
  ])("should return the right name", (names, value, expected) => {
    expect(whatName(names, value)).toStrictEqual(expected);
  });
});
