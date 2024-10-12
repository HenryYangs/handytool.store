function clickOutside(element, callback) {
  setTimeout(() => {
    document.addEventListener('click', handleClick);
  }, 0)

  function handleClick(event) {
    if (!element.contains(event.target)) {
      callback();
      document.removeEventListener('click', handleClick);
    }
  }
}

export default clickOutside;
