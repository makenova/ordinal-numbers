#!/usr/bin/env node

var runAsScript = require.main === module

if (runAsScript)
  console.log(ordinalize(parseInt(process.argv[2], 10)))

function validate(number) {
  return Number.isInteger(number);
}

function special(number) {
  return number >= 11 && number <= 13
}

function defaultCase(number) {
  return number.toString() + 'th'
}

function ordinalIndicator(number, ordinal) {
  return number.toString() + ordinal
}

function ordinalize(number) {
  if (!validate(number)) throw new Error('input must be an integer')
  if (number === 0) return '0'
  if (special(number)) return defaultCase(number)

  switch (number.toString().slice(-1)) {
    case '1':
      return ordinalIndicator(number, 'st')
    case '2':
      return ordinalIndicator(number, 'nd')
    case '3':
      return ordinalIndicator(number, 'rd')
    default:
      return defaultCase(number)
  }
  return number.toString()
}

module.exports = ordinalize
