# Decorator for debounce

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
