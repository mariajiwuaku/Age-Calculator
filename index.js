
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Sept"]

//  output element
 var outputYear = document.querySelector('.output-year');
 var outputMonth = document.querySelector('.output-month');
 var outputDay = document.querySelector('.output-day');
 var submit = document.querySelector('.submit-btn')

// input element
  let isValid = false;
  var inputYear = document.querySelector('#years');
  var inputMonth = document.querySelector('#months');
  var inputDay = document.querySelector('#days');

// error element
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



//Local Storage

window.onload = function(){
  if(localStorage)
  {
    populate();
    const form = document.getElementById('form');
    form.addEventListener('submit', Store);
  }
  else{
    window.alert('local storage is not supported')
  }
}

function Store() {
  let day = document.forms.calc.days.value;
  let month = document.forms.calc.months.value;
  let year = document.forms.calc.years.value;
  localStorage.setItem('days', day);
  localStorage.setItem('months', month);
  localStorage.setItem('years', year);


}
function populate() {
  let day = document.forms.calc.days;
  let month = document.forms.calc.months;
  let year = document.forms.calc.years;
  localStorage.getItem('days', day);
  localStorage.getItem('months', month);
  localStorage.getItem('years', year);
if(localStorage.getItem('days')!=null){
  day.value=localStorage.getItem('days');
}
}