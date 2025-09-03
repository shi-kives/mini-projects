let currentInput=''
let currentOperator=''
let previousInput=''
let result=''

function clearDisplay(){
    currentInput=''
    currentOperator=''
    previousInput=''
    document.getElementById('textdisplay').value = `${previousInput} ${currentOperator} ${currentInput}`;
}

function appendNumber(number){
    currentInput+=number;
    document.getElementById('textdisplay').value = `${previousInput} ${currentOperator} ${currentInput}`;
}

function appendOperation(operation){
    if(currentInput===''){
        return;
    }
    if(currentInput!==''){
        calculate();
    }
    currentOperator=operation;
    previousInput=currentInput;
    currentInput='';
    document.getElementById('textdisplay').value = `${previousInput} ${currentOperator} ${currentInput}`;

}

function calculate(){
    if(currentInput === '' || previousInput === ''){
        return;
    }
    let numResult=0;
    let num1= parseFloat(previousInput);
    let num2= parseFloat(currentInput);
    switch(currentOperator)
    {
        case '+': numResult=num1+num2;
        break;
        case '-': numResult=num1-num2;
        break;
        case '*': numResult=num1*num2;
        break;
        case '/': 
        if(num2==0){
            document.getElementById('textdisplay').value=`Error!`;
            return;
        }
        numResult=num1/num2;
        break;
        case '%': numResult=num2/100;
        break;
        default: return;
    }
    currentInput=numResult.toString(); // so user can work on the result
    previousInput='';
    currentOperator='';
    document.getElementById('textdisplay').value=currentInput;
}
