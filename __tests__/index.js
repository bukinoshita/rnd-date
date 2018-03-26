'use strict'

import test from 'ava'
import rndDate from './..'

test('should return a random date when passing one argument', t => {
  const rnd = rndDate(2010)

  t.true(
    rnd.getFullYear() > 2009 && rnd.getFullYear() < new Date().getFullYear() + 1
  )
})

test('should return a random date when passing two arguments', t => {
  const rnd = rndDate(2010, 2016)

  t.true(rnd.getFullYear() > 2009 && rnd.getFullYear() < 2017)
})

test('should return an error', t => {
  const error = rndDate(2010, 2009)

  t.is(error.message, 'Invalid date. Start date should be higher than end date')
})
