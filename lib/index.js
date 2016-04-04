
const DEFAULT_DELAY = 250;

const debounce = (delay = DEFAULT_DELAY) => {
  let timeoutId;

  return (target, name, descriptor) => {
    const method = descriptor.value;

    return {
      ...descriptor,
      value (...args) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => method.apply(this, args), delay);
      }
    };
  };
};

export default debounce;
