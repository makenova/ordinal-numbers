import test from 'ava'
import execa from 'execa'
import ordinal from './index'

test('th', t => {
  t.is(ordinal(0), '0')
  t.is(ordinal(4), '4th')
  t.is(ordinal(10), '10th')
  t.is(ordinal(14), '14th')
})

test('st', t => {
  t.is(ordinal(1), '1st')
  t.is(ordinal(31), '31st')
})

test('nd', t => {
t.is(ordinal(2), '2nd')
  t.is(ordinal(52), '52nd')
})

test('rd', t => {
t.is(ordinal(3), '3rd')
  t.is(ordinal(52), '52nd')
    t.is(ordinal(13423), '13423rd')
})

test('11 to 13', t => {
  t.is(ordinal(11), '11th')
  t.is(ordinal(12), '12th')
  t.is(ordinal(13), '13th')
})


test('cli', function (t) {
  return Promise.all([
    execa.stdout('./index.js', [0]),
    execa.stdout('./index.js', [10]),
    execa.stdout('./index.js', [45032])
  ]).then(function (values) {
    t.is(values[0], '0')
    t.is(values[1], '10th')
    t.is(values[2], '45032nd')
  }).catch(function (reason) {
    t.fail()
  })
})
