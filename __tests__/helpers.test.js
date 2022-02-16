const {format_join_date} = require('../utils/helpers');

test("format_join_date() returns a date string", () => {
  const date = new Date(
    "Tue Feb 15 2022 18:45:44 GMT-0500 (Eastern Standard Time)"
  );

  expect(format_join_date(date)).toBe("Feb 2022");
});
