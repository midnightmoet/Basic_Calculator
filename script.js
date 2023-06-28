const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

// console.log(buttonsEl)

for(let i = 0; i < buttonsEl.length; i++){
  buttonsEl[i].addEventListener("click", () => {
    // console.log(buttonsEl[i].textContent)
    const buttonValue = buttonsEl[i].textContent;
    
    if(buttonValue === "C"){
      clearResult();
    } else if(buttonValue === "="){
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

// function that clears the input field
function clearResult(){
  inputFieldEl.value = "";
}

// function to calculate the numbers
function calculateResult(){
  // inputFieldEl.value = eval(2*5)  <==== example to give output for eval()
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue){
  inputFieldEl.value += buttonValue;
//   inputFieldEl.value = inputFieldEl.value + buttonValue;  <==== same meaning as line 26
}
