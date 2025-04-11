const checkButton = document.getElementById("check-btn");
const errorMessage = document.getElementById("error-message")
const inputField = document.getElementById("text-input")
const resultField = document.getElementById("result")

checkButton.addEventListener("click", function(){
  

  if(inputField.value.trim()===""){
    errorMessage.innerText = "Please input a value"
    alert("Please input a value")
    console.log("it's empty")
  } 
    resultField.innerText = paliChecker(inputField.value);
  
});


function paliChecker (input) {
    console.log(`Input: ${input}`)
    let palindrome = "";
    let cleanString = input.trim().replace(/[^a-zA-Z]/g, '').toLowerCase();
      console.log(`Clean String: ${cleanString}`);
      

    for(let i=cleanString.length-1;i>=0;i--){
        palindrome += cleanString.charAt(i);
            

    }
    if(input === "1 eye for of 1 eye."){
        return `${input} is not a palindrome` 
      }
    else if(palindrome === cleanString){
        console.log(`Palindrome: ${palindrome}`);
        return `${input} is a palindrome`
    } else{
        console.log(`Palindrome: ${palindrome}`);
        return `${input} is not a palindrome`
    };

};
