const words = ['Developer.', 'Designer.', 'Creator.'];
const txtDisplay = document.querySelector('#visual');

let i = 0;
let j = 0;
let currentWord = [];
let isDeleting = false;
let isEnded = false;

function loop() {
  if (i < words.length) {
    isEnded = false;
    txtDisplay.innerHTML = `<span class='txt'>${currentWord.join('')}</span>`

    if (!isDeleting && j <= words[i].length) {
      currentWord.push(words[i][j]);
      j++;
      txtDisplay.innerHTML = `<span class='txt'>${currentWord.join('')}</span>`
    }

    if (isDeleting && j <= words[i].length) {
      currentWord.pop(words[i][j]);
      j--;
      txtDisplay.innerHTML = `<span class='txt'>${currentWord.join('')}</span>`
    }

    if (j === words[i].length) {
      isEnded = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentWord = []
      isDeleting = false;
      i++;

      if (i === words.length) {
        i = 0;
      }

    }

  }
  const speedUp = Math.random() * (80 - 50) + 50
  const normalSpeed = Math.random() * (500 - 200) + 200
  const time = isEnded ? 2000 : isDeleting ? speedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();