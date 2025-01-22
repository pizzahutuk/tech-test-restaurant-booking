import { ISeatRepository } from "../infrasctructure/repositories/ISeatRepository"

export class RestaurantService {
  constructor(
    private seatRepository: ISeatRepository,
    private tableSize: number = 2
  ) { }

  bookSeat(): boolean {
    const seats = this.seatRepository.getAllSeats() 
    const index = seats.findIndex(seat => !seat.occupied)
    if (index === -1) {
      return false
    }
    seats[index].occupied = true
    this.seatRepository.updateSeat(index, seats[index])
    return true
  }

  getNumberOfFreeSeats(): number {
    return this.seatRepository
      .getAllSeats()
      .filter(seat => !seat.occupied)
      .length
  }

  getNextAvailableSeat(): number | null {
    const seats = this.seatRepository.getAllSeats()
    const index = seats.findIndex(seat => !seat.occupied)
    return index === -1 ? null : index + 1
  }

  bookTable(): boolean {
    const seats = this.seatRepository.getAllSeats()
    for (let i = 0; i <= seats.length - this.tableSize; i++) {
      let canBook = true
      for (let j = 0; j < this.tableSize; j++) {
        if (seats[i + j].occupied) {
          canBook = false
          break
        }
      }
      if (canBook) {
        for (let j = 0; j < this.tableSize; j++) {
          seats[i + j].occupied = true
          this.seatRepository.updateSeat(i + j, seats[i + j])
        }
        return true
      }
    }
    return false
  }
}
