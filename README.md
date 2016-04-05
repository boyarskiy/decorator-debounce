# Decorator for debounce [![Build Status](https://travis-ci.org/boyarskiy/decorator-debounce.svg?branch=master)](https://travis-ci.org/boyarskiy/decorator-debounce)

> Decorator for debounce class methods


## Install

`npm install --save-dev decorator-debounce`


## Usage

```js
import debounce from 'decorator-debounce';

class Component {
  counter = 0;

  @debounce(250)
  onClick (e) {
    // ...
  }
}
```

## License

MIT
