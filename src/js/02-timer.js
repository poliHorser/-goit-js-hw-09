// // Import library
// import flatpickr from 'flatpickr';
// // import convertMs from './dateConvert';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// // // Import additional css styles
// // import 'flatpickr/dist/flatpickr.min.css';

// Get element date input, start btn, data: days, hours, min, sec
let getRef = selector => document.querySelector(selector);
const imputDatePickerRef = getRef('#datetime-picker');
const btnStartRef = getRef('[data-start]');
const daysRef = getRef('[data-days]');
const hoursRef = getRef('[data-hours]');
const minutesRef = getRef('[data-minutes]');
const secondsRef = getRef('[data-seconds]');

// Set initial value
let timeDifference = 0;
let timerId = null;
let formatDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    currentDifferenceDate(selectedDates[0]);
  },
};

btnStartRef.setAttribute('disabled', true);

// Initial flatpickr
flatpickr(imputDatePickerRef, options);

// Set click event listener on button start
btnStartRef.addEventListener('click', onBtnStart);
// Reset timer on btn
window.addEventListener('keydown', e => {
  if (e.code === 'Escape' && timerId) {
    clearInterval(timerId);

    imputDatePickerRef.removeAttribute('disabled');
    btnStartRef.setAttribute('disabled', true);

    secondsRef.textContent = '00';
    minutesRef.textContent = '00';
    hoursRef.textContent = '00';
    daysRef.textContent = '00';
  }
});

// Start timer
function onBtnStart() {
  timerId = setInterval(startTimer, 1000);
}

//date checking and rendering of date difference
function currentDifferenceDate(selectedDates) {
  const currentDate = Date.now();

  if (selectedDates < currentDate) {
    btnStartRef.setAttribute('disabled', true);
    return Notify.failure('Please choose a date in the future');
  }

  timeDifference = selectedDates.getTime() - currentDate;
  formatDate = convertMs(timeDifference);

  renderDate(formatDate);
  btnStartRef.removeAttribute('disabled');
}

//Timer
function startTimer() {
  btnStartRef.setAttribute('disabled', true);
  imputDatePickerRef.setAttribute('disabled', true);

  timeDifference -= 1000;

  if (secondsRef.textContent <= 0 && minutesRef.textContent <= 0) {
    Notify.success('Time end');
    clearInterval(timerId);
  } else {
    formatDate = convertMs(timeDifference);
    renderDate(formatDate);
  }
}

// Rendering date
function renderDate(formatDate) {
  secondsRef.textContent = formatDate.seconds;
  minutesRef.textContent = formatDate.minutes;
  hoursRef.textContent = formatDate.hours;
  daysRef.textContent = formatDate.days;
}

















// // Описаний в документації
// import flatpickr from "flatpickr";
// // Додатковий імпорт стилів
// import "flatpickr/dist/flatpickr.min.css";

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };












// const selectors = {
//     day: document.querySelector('data-days'),
//     hours: document.querySelector('data-hours'),
//     minutes: document.querySelector('data-minutes'),
//     seconds: document.querySelector('data-seconds'),
//     form: document.querySelector('form-input') 
// }


// const currentDate = new Date()
// const day = 10
// const hours = currentDate.getHours()
// const minutes = currentDate.getMinutes()
// const seconds = currentDate.getSeconds()

// selectors.day.textContent = (10)

// // const form = new Date('05/05/2023')
// // console.log(day - form.day)
// // console.log(hours - form.hours)


// console.log(day)
// // const currentDate = document.querySelector('form-input')
// // console.log(currentDate)
// // console.log(selectors.day)