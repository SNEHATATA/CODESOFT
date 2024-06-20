
function updateDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  

  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  

  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  

  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      if (value === '=') {
        calculateResult();
      } else if (value === 'C') {
        clearDisplay();
      } else {
        updateDisplay(value);
      }
    });
  });
  
