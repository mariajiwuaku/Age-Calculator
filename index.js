// select the output element
 var outputYear = document.querySelector('.output-year');
 var outputMonth = document.querySelector('.output-month');
 var outputDay = document.querySelector('.output-day');
 var submit = document.querySelector('.submit-btn')

// select the input element
  let isValid = false;
  var inputYear = document.querySelector('#years');
  var inputMonth = document.querySelector('#months');
  var inputDay = document.querySelector('#days');

// select the error element
var errorDay = document.querySelector('#day-error');
var errorMonth = document.querySelector('#month-error');
var errorYear = document.querySelector('#year-error')

// add eventlistener
submit.addEventListener('click', calculate )
inputDay.addEventListener('input', function(e){
  if(+inputDay.value > 31) {
    errorDay.textContent='Must be a valid date';
    isValid = false;
    return;
  } else{
    isValid = true;
    errorDay.textContent = '';
  }

  if (+ inputDay.value === 0){
    isValid = false;
    errorDay.textContent= 'This field is required';
    isValid =false;
    return;
  } else {
    errorDay.textContent = '';
  }
});

inputMonth.addEventListener('input', function(e){
  if(+inputMonth.value > 12) {
    errorMonth.textContent='Must be a valid Month';
    isValid = false;
    return;
  } else{
    isValid = true;
    errorMonth.textContent = '';
  }

  if (+ inputMonth.value === 0){
    isValid = false;
    errorMonth.textContent= 'This field is required';
    isValid =false;
    return;
  } else {
    errorMonth.textContent = '';
  }
});

inputYear.addEventListener('input', function(e){
  if(+inputYear.value > 2023) {
    errorYear.textContent='Must be a valid year';
    isValid = false;
    return;
  } else{
    isValid = true;
    errorYear.textContent = '';
  }

  if (+ inputYear.value === 0){
    isValid = false;
    errorYear.textContent= 'This field is required';
    isValid =false;
    return;
  } else {
    errorYear.textContent = '';
  }
});

// Retrieve saved birthDateObj from local storage
var savedBirthDate = localStorage.getItem('birthDateObj');
var birthDateObj;

if (savedBirthDate) {
  birthDateObj = new Date(savedBirthDate);
} else {
  birthDateObj = null;
}

// Add event listener
submit.addEventListener('click', calculate);






//Local Storage
// Retrieve saved birthDateObj, input values, and output values from local storage
var savedBirthDate = localStorage.getItem('birthDateObj');
var savedInputYear = localStorage.getItem('inputYear');
var savedInputMonth = localStorage.getItem('inputMonth');
var savedInputDay = localStorage.getItem('inputDay');
var savedOutputYear = localStorage.getItem('outputYear');
var savedOutputMonth = localStorage.getItem('outputMonth');
var savedOutputDay = localStorage.getItem('outputDay');

var birthDateObj;
if (savedBirthDate) {
  birthDateObj = new Date(savedBirthDate);
} else {
  birthDateObj = null;
}

// Set saved input values to input fields
if (savedInputYear) {
  inputYear.value = savedInputYear;
}
if (savedInputMonth) {
  inputMonth.value = savedInputMonth;
}
if (savedInputDay) {
  inputDay.value = savedInputDay;
}

// Set saved output values
if (savedOutputYear) {
  outputYear.textContent = savedOutputYear;
}
if (savedOutputMonth) {
  outputMonth.textContent = savedOutputMonth;
}
if (savedOutputDay) {
  outputDay.textContent = savedOutputDay;
}

// Add event listener
submit.addEventListener('click', calculate);

// ...

function calculate() {
  if (isValid) {
    let birthDate = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    birthDateObj = new Date(birthDate);  // Update the birthDateObj

    let currentDate = new Date();  // Get the current date

    let ageDiffMill = currentDate - birthDateObj;  // Calculate the difference in milliseconds
    let ageDate = new Date(ageDiffMill);

    // Calculate age components
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonths = ageDate.getUTCMonth();
    let ageDays = ageDate.getUTCDate() - 1;

    // Displaying everything
    outputDay.textContent = ageDays;
    outputMonth.textContent = ageMonths;
    outputYear.textContent = ageYears;

    // Save updated birthDateObj, input values, and output values in local storage
    localStorage.setItem('birthDateObj', birthDateObj.toJSON());
    localStorage.setItem('inputYear', inputYear.value);
    localStorage.setItem('inputMonth', inputMonth.value);
    localStorage.setItem('inputDay', inputDay.value);
    localStorage.setItem('outputYear', ageYears);
    localStorage.setItem('outputMonth', ageMonths);
    localStorage.setItem('outputDay', ageDays);
  } else {
    alert('error');
  }
  event.preventDefault();
}


