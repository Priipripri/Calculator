let number1=document.getElementById('number1');
let number2=document.getElementById('number2');
let char=document.getElementById('charId');
let calbtn=document.getElementById('calculate');
let num=0;
calbtn.addEventListener('click',()=>{
    let val1=parseFloat(number1.value);
    let val2=parseFloat(number2.value);
    switch(char.value){
        case '+' :
            num=val1+val2;
            break;
            case '-':
                num=val1-val2;
                break;
                case '*':
                    num=val1*val2;
                    break;
                    case '/':
                        num=val1/val2;
                        break;
    }
    document.getElementById('result').textContent=num;
})