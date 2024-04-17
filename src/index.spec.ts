import { bookSeat } from ".";

describe("Booking", () => {
  test("seat can be booked", () => {
    expect(bookSeat()).toBeTruthy();
  });
});
