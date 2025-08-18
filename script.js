function animateCounter(id, end) {
  let current = 0;
  const increment = Math.ceil(end / 100);
  const interval = setInterval(() => {
    current += increment;
    if(current >= end) {
      current = end;
      clearInterval(interval);
    }
    document.getElementById(id).textContent = current;
  }, 20);
}

window.addEventListener('load', () => {
  animateCounter('icra', 7853);
  animateCounter('vekalet', 874);
  animateCounter('dava', 4344);
});
