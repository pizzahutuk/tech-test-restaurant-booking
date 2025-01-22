import { ISeatRepository } from "../../src/infrasctructure/repositories/ISeatRepository"
import { RestaurantService } from "../../src/services/RestaurantService"
import { SEATS_ALL_FREE, SEATS_ALL_OCCUPIED, SEATS_NO_2_CONSECUTIVE } from "../fixtures/RestaurantService.fixtures"

const TABLE_SIZE = 2

describe("Tests for RestaurantService", () => {
    let seatRepositoryMock: jest.Mocked<ISeatRepository>
    let service: RestaurantService

    beforeEach(() => {
        jest.clearAllMocks()
        jest.resetAllMocks();
        seatRepositoryMock = {
            getAllSeats: jest.fn(),
            updateSeat: jest.fn(),
        }
        service = new RestaurantService(seatRepositoryMock, TABLE_SIZE)
    })

    describe("bookSeat", () => {
        beforeEach(() => {
            jest.clearAllMocks()
        })
        test("should book a seat if one is available", () => {
            seatRepositoryMock.getAllSeats.mockReturnValue(SEATS_ALL_FREE)

            const result = service.bookSeat()

            expect(result).toBe(true)
            expect(seatRepositoryMock.getAllSeats).toHaveBeenCalledTimes(1)
            expect(seatRepositoryMock.updateSeat).toHaveBeenCalledWith(
                0,
                { occupied: true }
            )
        })

        test("should return false if all seats are occupied", () => {
            seatRepositoryMock.getAllSeats.mockReturnValue(SEATS_ALL_OCCUPIED)

            const result = service.bookSeat()

            expect(result).toBe(false)
            expect(seatRepositoryMock.updateSeat).not.toHaveBeenCalled()
        })
    })

    describe("getNumberOfFreeSeats", () => {
        beforeEach(() => {
            jest.clearAllMocks()
        })
        test("should return the correct number of free seats", () => {
            seatRepositoryMock.getAllSeats.mockReturnValue(SEATS_NO_2_CONSECUTIVE)

            const result = service.getNumberOfFreeSeats()

            expect(result).toBe(2)
            expect(seatRepositoryMock.getAllSeats).toHaveBeenCalledTimes(1)
        })
    })

    describe("getNextAvailableSeat", () => {
        beforeEach(() => {
            jest.clearAllMocks()
        })
        test("should return the index + 1 of the first free seat", () => {
            seatRepositoryMock.getAllSeats.mockReturnValue(SEATS_NO_2_CONSECUTIVE)

            const result = service.getNextAvailableSeat()

            expect(result).toBe(2)
        })

        test("should return null if all seats are occupied", () => {
            seatRepositoryMock.getAllSeats.mockReturnValue(SEATS_ALL_OCCUPIED)

            const result = service.getNextAvailableSeat()

            expect(result).toBeNull()
        })
    })

    describe("bookTable", () => {
        beforeEach(() => {
            jest.clearAllMocks()
        })
        test("should book a table (2 consecutive seats) if available", () => {
            seatRepositoryMock.getAllSeats.mockReturnValue(SEATS_ALL_FREE)
            const result = service.bookTable()
            expect(result).toBe(true)
            expect(seatRepositoryMock.updateSeat).toHaveBeenCalledTimes(2)
        })

        test("should return false if cannot find 2 consecutive free seats", () => {
            seatRepositoryMock.getAllSeats.mockReturnValue(SEATS_NO_2_CONSECUTIVE)

            const result = service.bookTable()

            expect(result).toBe(false)
            expect(seatRepositoryMock.updateSeat).not.toHaveBeenCalled()
        })
    })
})
