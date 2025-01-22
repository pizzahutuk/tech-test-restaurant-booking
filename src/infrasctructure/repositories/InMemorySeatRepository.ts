import { Seat } from "../../domain/Seat"
import { InMemoryDatabase } from "../db/InMemoryDatabase"
import { ISeatRepository } from "./ISeatRepository"

export class InMemorySeatRepository implements ISeatRepository {
  constructor(totalSeats: number) {
    if (InMemoryDatabase.seats.length === 0) {
      InMemoryDatabase.seats = Array.from({ length: totalSeats }, () => new Seat())
    }
  }

  getAllSeats(): Seat[] {
    return InMemoryDatabase.seats
  }

  updateSeat(index: number, seat: Seat): void {
    InMemoryDatabase.seats[index] = seat
  }
}
