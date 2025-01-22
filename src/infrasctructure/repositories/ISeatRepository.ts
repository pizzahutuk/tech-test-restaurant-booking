import { Seat } from "../../domain/Seat"

export interface ISeatRepository {
  getAllSeats(): Seat[]
  updateSeat(index: number, seat: Seat): void
}
