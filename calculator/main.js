// Functions?
function appendToDisplay(input){
    appendToDisplay.value += input;
}

function clearDisplay(){
    clearDisplay.value = ();
}

function calculate(){
    try{
        clearDisplay.value = eval(display);
    }
    catch(error){
        display.value = 'Error'
    }
}



