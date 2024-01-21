window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment

function setupIntialValues() {
  const value = {amount: 10000, years:10, rate: 4.5};
  const loanAmountUI = document.getElementById("loan-amount");
  loanAmountUI.value = value.amount;
  const termsInYears = document.getElementById("loan-years");
  termsInYears.value = value.years;
  const yearlyRate = document.getElementById("loan-rate");
  yearlyRate.value = value.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment

function update() {
  const currentInputValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentInputValues));
}  

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.

function calculateMonthlyPayment(value) {
    const monthlyRate = (value.rate / 100) / 12;
    const n = Math.floor(value.years * 12);
    return ((monthlyRate * value.amount) / (1 - Math.pow((1+ monthlyRate), -n))).toFixed(2);
  }

  // Given a string representing the monthly payment value,
// update the UI to show the value.

function updateMonthly(monthly) {
  const monthlyInput = document.getElementById("monthly-payment");
  monthlyInput.innerText = "$" + monthly 
}

