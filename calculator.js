/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply (a , b){
    document.getElementById("result").innerHTML += document.getElementById("a").value * document.getElementById("b").value;
    console.log('multiply');
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add (a , b){
    document.getElementById("result").innerHTML += document.getElementById("a").value + document.getElementById("b").value;
    console.log('add');
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract (a , b){
    document.getElementById("result").innerHTML += document.getElementById("a").value - document.getElementById("b").value;
    console.log('subtract');
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide (a , b){
    document.getElementById("result").innerHTML += document.getElementById("a").value / document.getElementById("b").value;
    console.log('divide');
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

let button = document.getElementById("multiple", "add", "subtract", "divide");
function resulted (event) {
        if (document.getElementById("multiple").checked == true){
            multiply();
            console.log("hello");
        }else if(document.getElementById("add").checked == true){
            add();
        }else if(document.getElementById("subtract").checked == true){
            sub();
        }else if(document.getElementById("divide").checked == true){
            divide();
        }


}
    
button.addEventListener("click", resulted);
    
    
    
    
    
    
    
    
    
    
    
    