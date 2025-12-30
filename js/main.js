const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
  // Pick a random color and apply it to the background
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
  document.body.style.backgroundColor = randomColor;
});
