console.log('hello');
const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 10000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
  text.innerHTML = 'Breathe in...';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe out...';
      container.className = 'container shrink';
    }, holdTime)
  }, breatheTime)
}

setInterval(breatheAnimation, totalTime);

const music = document.getElementById('wind-sound');
music.volume = 0.3;
