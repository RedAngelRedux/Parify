// START OR CONTROLLER FUNCTION
// get the values from the UI
function getValues() {
    
    // get values from the page
    let startValue =  document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // Attempt to Parse Into IInterger
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNumber()
        let numbers = generateNumbers(startValue,endValue);
        // call displayNumbers()
        displayNumbers(numbers);
    } else {
        alert("You Must Enter Integers");
    }

}

// LOGIC FUNCTION(S)
// generate number from startVAlue to the endValue
function generateNumbers(sValue, eValue) {

    let numbers = [];

    // we want to get all numbers from start to end
    for (let index = sValue; index <= eValue; index++) {
        numbers.push(index);
    }

    return numbers;
}

// DISPLAY OR VIEW FUNCTION
// display the numbers and make the even numbers bold
function displayNumbers(numbers) {

    let templateRow = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";

        let number = numbers[index];
        
        if(number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }  

        templateRow += `<tr><td class=${className}>${number}</td></tr>`;
        
    }

    document.getElementById("results").innerHTML = templateRow;

}