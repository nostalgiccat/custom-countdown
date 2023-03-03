const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm'); 
const dateEL = document.getElementById('date-picker');

// Set Date Input Min with Today's date
const today = new Date().toISOString().split('T')[0];
dateEL.setAttribute('min', today); 