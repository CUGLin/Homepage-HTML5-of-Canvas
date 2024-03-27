let displayValue = '';  
  
function appendValue(value) {  
  const display = document.getElementById('display');  
  if (value === '=') {  
    const result = eval(displayValue);  
    display.value = result;  
    displayValue = result.toString();  
  } else if (value === 'C') {  
    display.value = '';  
    displayValue = '';  
  } else {  
    display.value += value;  
    displayValue += value;  
  }  
}  
  
function clearDisplay() {  
  const display = document.getElementById('display');  
  display.value = '';  
  displayValue = '';  
}  
  
function calculate() {  
  appendValue('=');  
}