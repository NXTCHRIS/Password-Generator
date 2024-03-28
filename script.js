addEventListener("DOMContentLoaded", () => {
    const charLength = document.querySelector(".char-length");
    const rangeSlider = document.querySelector(".range");
    const uppercase = document.getElementById("uppercase");
    const lowercase = document.getElementById("lowercase");
    const numbers = document.getElementById("numbers");
    const symbols = document.getElementById("symbols");
    const stageOne = document.querySelector(".stage1");
    const stageTwo = document.querySelector(".stage2");
    const stageThree = document.querySelector(".stage3");
    const stageFour = document.querySelector(".stage4");
    lowercase.checked = true;
    stageOne.style.backgroundColor = "#a4ffaf"
    const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const selectedSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
    const mainBtn = document.getElementById("main-btn");
    const mainDisplay = document.getElementById("main-input");
    console.log(mainBtn)
// setting default value of the char length on the first load// 
    charLength.innerHTML= rangeSlider.value;
// event listener to change char length based on the slider movement //
    rangeSlider.addEventListener('change', () => {
    charLength.innerHTML = rangeSlider.value;
    })
// event listener for each level of password strength //
    uppercase.addEventListener("change", () => {
       if(uppercase.checked) {
        stageTwo.style.backgroundColor = "#a4ffaf"
       } else {
        stageTwo.style.backgroundColor = "rgba(24,23,31,255)"
       }
    })
    lowercase.addEventListener("change", () => {
        if(lowercase.checked) {
         stageOne.style.backgroundColor = "#a4ffaf"
        } else {
         stageOne.style.backgroundColor = "rgba(24,23,31,255)"
        }
     })
     numbers.addEventListener("change", () => {
        if(numbers.checked) {
         stageThree.style.backgroundColor = "#a4ffaf"
        } else {
         stageThree.style.backgroundColor = "rgba(24,23,31,255)"
        }
     })
     symbols.addEventListener("change", () => {
        if(symbols.checked) {
         stageFour.style.backgroundColor = "#a4ffaf"
        } else {
         stageFour.style.backgroundColor = "rgba(24,23,31,255)"
        }
     })
     function createrPass() {
        let password = "";
        let allowedChar = "";

        allowedChar += lowercase.checked ? lowerCaseLetters.join("") : "";
        allowedChar += uppercase.checked ? upperCaseLetters.join("") : "";
        allowedChar += numbers.checked ? numbersZeroToNine.join("") : "";
        allowedChar += symbols.checked ? selectedSpecialCharacters.join("") : "";
        for(let i = 0; i < rangeSlider.value; i++) {
            
            password+= allowedChar[Math.floor(Math.random()*allowedChar.length)];
        }
        mainDisplay.value = password
     }
    mainBtn.addEventListener("click",() => {
        createrPass()
    })
  






































})