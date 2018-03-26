'use strict'

const rndDate = (from, to = new Date()) => {
  let end

  if (from > to) {
    return new TypeError(
      'Invalid date. Start date should be higher than end date'
    )
  }

  to instanceof Date ? (end = to) : (end = new Date(to, 0, 1))
  const startDate = new Date(from, 0, 1)
  const randomDate = new Date(
    startDate.getTime() + Math.random() * (end.getTime() - startDate.getTime())
  )

  return randomDate
}

module.exports = rndDate
