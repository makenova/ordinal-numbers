# Ordinal Numbers

[![Build Status](https://travis-ci.org/makenova/ordinal-numbers.svg?branch=master)](https://travis-ci.org/makenova/ordinal-numbers)

Add the ordinal indicator to a integer

## Install

```sh
npm install --save ordinal-numbers

# OR install it globally for cli use

npm install -g ordinal-numbers
```

## Use

```js
var ordinal = require('ordinal-number')
ordinal(0) // => '0'
ordinal(13) // => '13th'
```

or in with `import`

```js
import ordinal from 'ordinal-number'
ordinal(61) // => '61st'
ordinal(22) // => '22nd'
```

or if you installed it globally,

```sh
ordinal 83 # => 83rd
```

## API

### `ordinal(integer)`

convert an integer to a string with the ordinal indicator appended.

## Bugs

Please report any bugs to: https://github.com/makenova/ordinal-numbers/issues

## License

Licensed under the MIT License: https://opensource.org/licenses/MIT
