'use strict'

import test from 'ava'
import rndDate from './..'

test('should return a random date when passing one argument', async t => {
  const rnd = await rndDate(2010).then(res => res)

  t.true(rnd.getFullYear() > 2009 && rnd.getFullYear() < new Date().getFullYear() + 1)
})

test('should return a random date when passing two arguments', async t => {
  const rnd = await rndDate(2010, 2016).then(res => res)

  t.true(rnd.getFullYear() > 2009 && rnd.getFullYear() < 2017)
})

test('should return an error', async t => {
  const rnd = await rndDate(2010, 2009).catch(err => err)

  t.is(rnd, 'Invalid date. Start date should be higher than end date')
})
