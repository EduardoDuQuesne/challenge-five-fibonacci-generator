//Fibonacci Number Generator
//Print to Dom
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//store last number, number before last, and  sum

let theDom = document.getElementById("body");
let newDiv = document.createElement("div");
theDom.appendChild(newDiv);

function printToDom(fibo) {
    let newP = document.createElement("p");
    newP.setAttribute("class", "numbers");
    let numContent = document.createTextNode(fibo);
    newP.appendChild(numContent);
    newDiv.appendChild(newP);    
}

let fibo = 0;
let one = 1;
let two = 0;
for (let i = 0; fibo <= 500; i++) {
    printToDom(fibo);     
    two = fibo + one; 
    fibo = one;       
    one = two;   
}
