#!/usr/bin/env node

var runAsScript = require.main === module
var ordinal = require('./index')

if (runAsScript)
  console.log(ordinal(parseInt(process.argv[2], 10)))
