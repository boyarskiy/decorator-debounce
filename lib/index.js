
const DEFAULT_DELAY = 250;

const debounce = (delay = DEFAULT_DELAY, immediate = false) => {
  let timeoutId;

  return (target, name, descriptor) => {
    const method = descriptor.value;

    return {
      ...descriptor,
      value (...args) {
        if (immediate && !timeoutId) {
          method.apply(this, args);
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          timeoutId = null;
          if (!immediate) {
            method.apply(this, args);
          }
        }, delay);
      }
    };
  };
};

export default debounce;
