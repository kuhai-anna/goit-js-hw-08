import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);
const TIME_KEY = 'videoplayer-current-time';

// Викликається при завантаженні або перезавантаженні сторінки
setCurrentTime();

// Виклик функції оновлення часу, частота запису даних у сховище
player.on('timeupdate', throttle(onTimeUpdate, 1000));

// Отримуємо час відеоплеєра
// Записуємо його у сховище
function onTimeUpdate() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(TIME_KEY, seconds);
    })
    .catch(function (error) {
      // an error occurred
    });
}

// Отримуємо дані зі сховища
// Якщо там щось є, оновлюємо час
function setCurrentTime() {
  player.setCurrentTime(localStorage.getItem(TIME_KEY) || 0);
}
