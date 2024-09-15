// for browser compatibility
// use requestAnimationFrame if the browser support
// then use setTimeout
export const loop = (fn, options = {}) => {
  if (!fn) return;

  let id;

  if (requestAnimationFrame) {
    id = requestAnimationFrame(fn);
    return id;
  }

  if (setTimeout) {
    id = setTimeout(fn, options.timeout || 0);
    return id;
  }
};

export const cancelLoop = (id) => {
  if (!id) return;

  if (requestAnimationFrame) {
    cancelAnimationFrame(id);
    return;
  }

  if (setTimeout) {
    clearTimeout(id);
    return;
  }
}
