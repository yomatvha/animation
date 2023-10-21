const button = document.querySelector('.button');
const text = document.querySelector('.text');

function removeTextAnimation() {
  text.classList.remove('text-animation');
}

function addTextAnimationHidden() {
  text.classList.add('text-animation-hidden');
}

function removeTextAnimationHidden() {
  text.classList.remove('text-animation-hidden');
}

function addTextAnimation() {
  text.classList.add('text-animation');
}

function addHidden() {
  text.classList.add('hidden');
}

button.addEventListener('click', () => {
  if (text.classList.contains('hidden')) {
    text.classList.remove('hidden');
  } else {
    removeTextAnimation();
    addTextAnimationHidden();
    setTimeout(removeTextAnimationHidden, 500);
    setTimeout(addHidden, 475);
    setTimeout(addTextAnimation, 500);
  }
});
