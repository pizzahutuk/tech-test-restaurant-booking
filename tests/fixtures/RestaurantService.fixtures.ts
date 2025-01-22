import { Seat } from "../../src/domain/Seat"

export const SEATS_ALL_FREE: Seat[] = [
  { occupied: false },
  { occupied: false },
  { occupied: false },
  { occupied: false },
  { occupied: false },
]

export const SEATS_ALL_OCCUPIED: Seat[] = [
  { occupied: true },
  { occupied: true },
  { occupied: true },
  { occupied: true },
  { occupied: true },
]

export const SEATS_NO_2_CONSECUTIVE: Seat[] = [
  { occupied: true },
  { occupied: false },
  { occupied: true },
  { occupied: false },
]
