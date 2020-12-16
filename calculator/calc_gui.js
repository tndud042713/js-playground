var input = {'array': []}; // 초기화


input.getInput = function() {//버튼을 누르면 위의 화면에 누른 숫자가 표시 되어야 함
    return this.array.join("");    
} 

var output = {}; //객체를 하나 생성
output.text = document.getElementById('output');

var clickNumbers = function(event){
    var str = event.target.innerHTML;
    console.log(str);
    switch(str){
        case 'BS':
            input.array.pop();
        break;
        
        case '+':            
        case '-':            
        case '*':            
        case '/':
            input.array.push(' '+str+' ');
            break;
        default:
           input.array.push(str); 
    }
    if(input.array.length==0){
        output.text.innerHTML = "Empty";
    }else{
        // console.log(input.getInput()); // 함수를 호출
        output.text.innerHTML = input.getInput();
    }
    
}

var showResult = function(event){
    console.log("click others");
    console.log(event.target.innerHTML);
}


// input.init = function (str) {
//     this.list = str.split(" ");
// };

// input.getValue = function () {
//     var str = this.list.shift();
//     var n = Number(str);
//     return n;
// };

// input.empty = function () {
//     return this.list.length == 0;
// };

// input.getOperator = function () {

//     var op = this.list.shift();
//     if (op === "+" || op === "-" || op === "*" || op === "/" || op === "q") {
//         return op;
//     } else {
//         return "$";
//     }

//     return op;
// };

// var calculator = {};
// calculator.calculate = function (first, second, op) {
//     var ret;
//     switch (op) {
//         case "+":
//             ret = first + second;
//             break;
//         case "-":
//             ret = first - second;
//             break;
//         case "*":
//             ret = first * second;
//             break;
//         case "/":
//             ret = first / second;
//             break;
//         default:
//             return NaN;
//     }
//     return ret;
// };

// var output = {};
// output.out = document.getElementById('output');

// output.print = function (value) {
//     this.out.innerHTML = "최종 결과값은 " + value + "입니다.";
// };

// function calc() {
//     var str = document.getElementById('input').value;
//     input.init(str);
//     var result = input.getValue();
//     while (!input.empty()) {
//         var op = input.getOperator();
//         var second = input.getValue();
//         result = calculator.calculate(result, second, op);
//     }

//     output.print(result);
// }
