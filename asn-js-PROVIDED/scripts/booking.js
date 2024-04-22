// author: johram querijero

/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var full = document.getElementById("full");
var half = document.getElementById("half");
var mondayElement = document.getElementById("monday");
var tuesdayElement = document.getElementById("tuesday");
var wednesdayElement = document.getElementById("wednesday");
var thursdayElement = document.getElementById("thursday");
var fridayElement = document.getElementById("friday");
var daysOfWeek = [mondayElement,tuesdayElement,wednesdayElement,thursdayElement,fridayElement];
var calculatedCost = document.getElementById("calculated-cost");
var clearButton = document.getElementById("clear-button");
var fullDailyRate = 35;
var halfDailyRate = 20;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function day_selection() {
    if (!(this.classList.contains("clicked"))) {
            this.classList.add("clicked");  
    }

    recalculate(this);
}

for (let i = 0; i < daysOfWeek.length; i++) {
    daysOfWeek[i].addEventListener("click", day_selection);
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clear() {
    for (let i = 0; i < daysOfWeek.length; i++) {
        daysOfWeek[i].classList.remove("clicked");
    } 
    calculatedCost.innerHTML = 0;
}

clearButton.addEventListener("click", clear);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function half_duration() {
    if (!(this.classList.contains("clicked"))){
        this.classList.add("clicked");  
        if (this == half) { 
            full.classList.remove("clicked");
        }
    }
    recalculate(this);
}   
half.addEventListener("click", half_duration);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full_duration() {
    if (!(this.classList.contains("clicked"))) {
        this.classList.add("clicked");     
        if (this == full) { 
            half.classList.remove("clicked");
        }
    }
    recalculate(this);
}

full.addEventListener("click", full_duration);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(clickedElement) {
    let counter = 0;
    for (let i = 0; i < daysOfWeek.length; i++) {
        if (daysOfWeek[i].classList.contains("clicked")) {
            counter += 1;
        }
    }
    if (clickedElement == full) {
        let weeklyCost = counter * fullDailyRate;
        calculatedCost.innerHTML = weeklyCost;
    }
    if (clickedElement == half) {
        let weeklyCost = counter * halfDailyRate;
        calculatedCost.innerHTML = weeklyCost;  
    }
    if (daysOfWeek.includes(clickedElement)) {
        if (full.classList.contains("clicked")) {
            let weeklyCost = counter * fullDailyRate;
            calculatedCost.innerHTML = weeklyCost;
        }
        if (half.classList.contains("clicked")) {
            let weeklyCost = counter * halfDailyRate;
            calculatedCost.innerHTML = weeklyCost;
        }
    }
}
    
