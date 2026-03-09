/* ========================================
1. DOM ELEMENT
======================================== */

const display = document.getElementById("display");


/* ========================================
2. FUNCTIONS
======================================== */


// Add Value
function addValue(value){
    display.value = display.value + value;
}


// Clear Display
function clearDisplay(){
    display.value = "";
}


// Calculate Result
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}