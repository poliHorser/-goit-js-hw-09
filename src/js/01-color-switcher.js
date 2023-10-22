
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    const startButton = document.querySelector('[data-start]');
    const stopButton = document.querySelector('[data-stop]');

    let intervalId;

    // Функція для зміни кольору фону та вимкнення кнопки "Start"
    function startColorChange() {
      startButton.disabled = true;
      stopButton.disabled = false;

      intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
    }

    // Функція для зупинки зміни кольору фону та активації кнопки "Start"
    function stopColorChange() {
      startButton.disabled = false;
      stopButton.disabled = true;

      clearInterval(intervalId);
    }

    startButton.addEventListener('click', startColorChange);
    stopButton.addEventListener('click', stopColorChange);
 

