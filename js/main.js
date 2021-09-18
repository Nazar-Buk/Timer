const watch = document.querySelector('#watch'); // циферблат
let milliseconds = 0;
let timer;
let btnStartStop = document.querySelector('.mitka');
let btnWait = document.querySelector('.wait');

const startWatch = () => {
  watch.classList.remove('paused');
  clearInterval(timer);
  timer = setInterval(() => {
    milliseconds += 10;
    let dataTimer = new Date(milliseconds);
    watch.innerHTML =
      ('0' + dataTimer.getUTCMinutes()).slice(-2) + ':' +
      ('0' + dataTimer.getUTCSeconds()).slice(-2);

  }, 10)
};

const pausedWatch = () => {
  watch.classList.add('paused');
  clearInterval(timer);
};

const stopWatch = () => {
  watch.classList.remove('paused');
  clearInterval(timer);
  milliseconds = 0;
  watch.innerHTML = '00:00';
};

document.addEventListener('click', (e) => {
  const element = e.target; // силка на б'єкт з яким відбулася дія, напевно кнопки
  if (element.id === 'reset') {
    stopWatch();
    startWatch();
  }

});

btnWait.addEventListener('dblclick', () => {
  if (btnWait.id === 'pause') pausedWatch();
});

btnStartStop.addEventListener('click', () => {
  if (btnStartStop.classList.contains('stop') || watch.classList.contains('paused')) {
    btnStartStop.classList.remove('stop');
    btnStartStop.classList.add('start');
    startWatch();
  } else if (btnStartStop.classList.contains('start')) {
    btnStartStop.classList.remove('start');
    btnStartStop.classList.add('stop');
    stopWatch();
  }
});
