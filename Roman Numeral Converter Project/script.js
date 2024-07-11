const numberInput = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const result = document.getElementById("output")

const checkUserInput = () =>{
    if(numberInput.value===""){
        result.textContent = "Please enter a valid number"
    }else if(numberInput.value<1){
        result.textContent = "Please enter a number greater than or equal to 1"
    }else if(numberInput.value >= 4000){
        result.textContent = "Please enter a number less than or equal to 3999"
    }else{
        result.textContent = convertToRoman(numberInput.value);
    }

}

function convertToRoman(num) {
    const romanNumerals = {
      M: 1000, CM: 900,
      D: 500, CD: 400,
      C: 100, XC: 90,
      L: 50, XL: 40,
      X: 10, IX: 9,
      V: 5, IV: 4,
      I: 1
    };
  
    let result = '';
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }
    return result;
  }
  convertBtn.addEventListener("click",checkUserInput);