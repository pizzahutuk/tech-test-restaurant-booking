# Table booking system for a small restaurant

A recently opened restaurant realised that their customers prefer to book tables online. They’re scrambling to put something into production that supports this. They’ve asked two engineers to create this booking system, and your task is the BE part of it. Assume that the frontend part is someone else’s concern and that you’ll be using serverless cloud hosting: there’s no need to worry about the server component, only the business logic.

## Tips

- Keep it simple, assume this iteration is the MVP, but one intended to work in production.
- Mention any scope or user scenarios considered, but excluded.
- Consider the unhappy path (e.g. where can exceptions or failures occur)
- UI is not a concern.
- Write good tests

## Requirements

### MVP

- Support booking a seat.
- Restaurant can seat 30 people.
- Return the number of free seats at a given time (not occupied).
- Return a seat number of the next available seat.

### Table enhancements

- Instead of seats, it is divided into tables that support two people each
  - Table and seat number is returned instead of just seat number
- It can support different numbers of people per table type (two, four, six persons)
  - 1 six
  - 4 fours
  - 4 twos
- Facilitate single bookings for singles by adding a bar seating area (8 spaces)
- It facilitates larger bookings by combining X number of tables.
- It facilitates specific tables (fours) being flagged to support wheelchairs by removing two seats
  - There is a limit on the number of chairs that can be removed (6)

## Further enhancements

- Can support groups arriving at 5 minutes intervals and staying for either 1 or 2 hours
  - Give an estimated waiting time if the restaurant is full
- Can support multiple restaurant branches
