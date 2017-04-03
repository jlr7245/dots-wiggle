function colorClicker(color, e) {
  e.target.classList += ' no';
}

((n) => {
  const gameBoard = document.getElementById('board');
  const arrayOfColors = ['#167C80', '#005397', '#0BBCD6', '#CF2F89', '#EED974'];
  function init() {
    for (let i = 0; i < n; i++) {
      let currentColorIndex = Math.floor(Math.random() * arrayOfColors.length);
      let gamePiece = document.createElement('div');
      gamePiece.style.backgroundColor = arrayOfColors[currentColorIndex];
      gamePiece.dataset.currentindex = currentColorIndex;
      gamePiece.addEventListener('click', (e) => colorClicker(currentColorIndex, e));
      gameBoard.appendChild(gamePiece);
    }
  }
  init();
})(parseInt(window.prompt('how many dots?')));