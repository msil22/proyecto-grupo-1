function getRandomColors() {
  var colors = ['green', 'blue', 'red'];
  var randomColors = [];
  for (var i = 0; i < 3; i++) {
    var randomIndex = Math.floor(Math.random() * colors.length);
    randomColors.push(colors[randomIndex]);
  }
  return randomColors;
}

document.querySelectorAll('h5').forEach(item => {
  item.addEventListener('click', event => {
    var colors = getRandomColors();
    item.style.color = colors[0];
    item.style.backgroundColor = colors[1];
    item.style.borderColor = colors[2];
  })
})
