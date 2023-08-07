export function debounce(f, ms) {
  let lastCall;

  return function (...args) {
    clearTimeout(lastCall);

    lastCall = setTimeout(() => {
      f.apply(null, args);
    }, ms);
  };
}
