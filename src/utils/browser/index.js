// for browser compatibility
// use requestAnimationFrame if the browser support
// then use setTimeout
export const loop = (fn, options = {}) => {
  if (!fn) return;

  if (requestAnimationFrame) {
    requestAnimationFrame(fn);
    return;
  }

  if (setTimeout) {
    setTimeout(fn, options.timeout || 0);
  }
}
