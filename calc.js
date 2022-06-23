function getCalc(){

    let result;
    let operator= prompt("Enter an operator: + - * /");

    let num1= parseFloat(prompt("Enter a number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    if(operator == "+"){
        result= num1 + num2
    }

    else if(operator == "-"){
        result= num1 - num2
    }

    else if(operator == "/"){
        result= num1 / num2
    }

    else if(operator == "*"  || operator == "&#247;"){
        result= num1 * num2
    }

    alert("here is your answer: " + result)
}

