const num1 = Math.floor(Math.random() * 20);
const today =  document.querySelector(".today");
today.innerHTML = `Today: ${num1}%`

const num2 = Math.floor(Math.random() * 20);
const yesterday =  document.querySelector(".yesterday");
yesterday.innerHTML = `Yesterday: ${num2}%`

const myDiv = document.querySelector(".fa-caret-up");
const myDivEq = document.querySelector(".equallng");


 if (num1 === num2) {
	myDivEq.style.display = "block";
    myDivEq.style.color = "#333";
	myDiv.style.display = "none";
	
  } 
  else if( num1 < num2) {
    myDiv.style.color = "red";
	myDiv.style.transform = "rotate(180deg)";
	today.style.color = "red";

   }
  else if( num1 > num2) {
    myDiv.style.color = "green";
	today.style.color = "green";
	
   }