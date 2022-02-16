const {format_join_date, format_posted_date} = require('../utils/helpers');

test("format_join_date() returns a date string", () => {
  const date = new Date(
    "Tue Feb 15 2022 18:45:44 GMT-0500 (Eastern Standard Time)"
  );

  expect(format_join_date(date)).toBe("Feb 2022");
});

test("format_posted_date() returns a date string", () => {
  const date = new Date(
    "Tue Feb 1 2022 18:45:44 GMT-0500 (Eastern Standard Time)"
  );

  expect(format_posted_date(date)).toContain("Posted");
  expect(format_posted_date(date)).toContain("days");
  expect(format_posted_date(date)).toContain("ago");
});
