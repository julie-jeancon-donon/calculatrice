let numbers = document.getElementsByClassName("numbers");
let operators = document.getElementById("operators");
let display = document.getElementById("display");
let number1 = "";
let number2 = "";
let stockOperator = "";

document.getElementById("operators").addEventListener =("click",operateur);


document.getElementById("equal").onclick = function(){
  equal();
}

document.getElementById("clear").onclick = function(){
  clear();
}

document.getElementById("pourcent").onclick = function(){
  pourcent();
}

document.getElementById("back").onclick = function(){
  back();
}

for (var i = 0; i < numbers.length; i++) {
  numbers[i].onclick = function(){
    getValue(this);
   }
}

for (var i = 0; i < operators.length; i++) {
  // operators[i].onclick = function(){
  //    getValue(this);
  // }
  operators[i].addEventListener =("click",operateur);
}

function getValue(element){

  number1 += element.innerHTML;
  display.innerHTML = number1;

}



  // number1 = eval(number1);
  // display.innerHTML = number1;



 function operateur(n){
   if(number2 === ""){
     number2 = Number(number1);

   }

   else{
     number1 = Number(number1);
     if(stockOperator === "+"){
       number1 = display.innerHTML = number2 + number1;

     }

     else if(stockOperator === "-"){
       number1 = display.innerHTML = number2 - number1;
     }

     else if(stockOperator === "/"){
       number1 = display.innerHTML = number2 / number1;
     }

     else if(stockOperator === "*"){
       number1 = display.innerHTML = number2 * number1;
     }

     number2 = number1;
   }

   number1 = "";
   stockOperator = n;

 }

 function equal(){
   number1 = Number(number1);
   if(stockOperator === "+"){
     number1 = display.innerHTML = number2 + number1;

   }

   else if(stockOperator === "-"){
     number1 = display.innerHTML = number2 - number1;
   }

   else if(stockOperator === "/"){
     number1 = display.innerHTML = number2 / number1;
   }

   else if(stockOperator === "*"){
     number1 = display.innerHTML = number2 * number1;
   }

   number2="";

}

function clear(){
  number1 = display.innerHTML = "";

}


function pourcent(){
  number1 = Number(number1);
  if(stockOperator === "+"){
    number1 = display.innerHTML = number2 + number1;

  }

  else if(stockOperator === "-"){
    number1 = display.innerHTML = number2 - number1;
  }

  else if(stockOperator === "/"){
    number1 = display.innerHTML = number2 / number1;
  }

  else if(stockOperator === "*"){
    number1 = display.innerHTML = number2 * number1;
  }

  number1 = display.innerHTML = number1/100;
  stockOperator="";
}

function back(){
  number1 = number1.toString();
  number1 = number1.substring(0,number1.length-1);
  number1 = display.innerHTML = number1;
}
