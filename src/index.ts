import { InMemorySeatRepository } from "./infrasctructure/repositories/InMemorySeatRepository"
import { RestaurantService } from "./services/RestaurantService"

let seatRepository: InMemorySeatRepository
let restaurantService: RestaurantService
// these constants can be environment variables or they could be configurable values within a “settings” table.
const TABLE_SIZE = 2
const TOTAL_SEATS = 30
function init() {
  seatRepository = new InMemorySeatRepository(TOTAL_SEATS)
  restaurantService = new RestaurantService(seatRepository, TABLE_SIZE)
}

init()

export function reset() {
  init()
}

export function bookSeat(): boolean {
  return restaurantService.bookSeat()
}

export function getNumberOfFreeSeats(): number {
  return restaurantService.getNumberOfFreeSeats()
}

export function getNextAvailableSeat(): number | null {
  return restaurantService.getNextAvailableSeat()
}

export function bookTable(): boolean {
  return restaurantService.bookTable()
}
