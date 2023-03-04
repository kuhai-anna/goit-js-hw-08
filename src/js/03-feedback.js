import throttle from 'lodash.throttle';

// Посилання на елементи
const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

const LOCALSTORAGE_KEY = 'feedback-form-state';

// Обʼєкт для збереження даних
const data = {};
const dataJSON = localStorage.getItem(LOCALSTORAGE_KEY);

// Додаємо слехачів подій + оновлення сховища кожні 500 мілісекунд
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

// Викликається при завантаженні або перезавантаженні сторінки
populateFormOutput();

// Зупиняємо поведінку по замовчуванню
// Виводимо повідомлення про необхідність заповнити усі поля, при цьому зберігаючи уже введені дані
// Виводимо у консоль обʼєкт з даними з форми
// Очищуємо форму
// Прибираємо повідомлення зі сховища
function onFormSubmit(e) {
  e.preventDefault();

  if (email.value === '' || message.value === '') {
    alert('Заповніть усі поля форми!');
  } else {
    console.log(data);

    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}

// Отримуємо значення полів
// Записуємо його у сховище
function onFormInput(e) {
  data[e.target.name] = e.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}

// Отримуємо дані зі сховища
// Якщо там щось є, оновлюємо DOM
function populateFormOutput() {
  try {
    const dataParse = JSON.parse(dataJSON);

    if (dataParse) {
      email.value = dataParse.email;
      message.value = dataParse.message;
    }
  } catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // Unexpected token W in JSON at position 0
  }
}
