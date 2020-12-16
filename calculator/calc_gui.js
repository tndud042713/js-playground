//JS calculator
//input object - 입력담당 객체
var input = { 'array': [] }; // 초기화

//입력받은 수식을 문자열로 리턴
input.getInput = function () {//버튼을 누르면 위의 화면에 누른 숫자가 표시 되어야 함
    return this.array.join("");
}
//입력 배열을 초기화
input.removeAll = function (value) {
    this.array = [];
    this.array.push(value);
};
//수식이 비었는지 검사
input.isEmpty = function () {
    return this.array.length == 0;
};

input.getValue = function () {
    var str = this.array.shift();
    var n = Number(str);
    return n;
};

input.prepareCalculate = function () {
    this.array = this.array.join("").split(" ");
};

input.getOperator = function () {

    var op = this.array.shift();
    if (op === "+" || op === "-" || op === "*" || op === "/" || op === "q") {
        return op;
    } else {
        return "$";
    }
};

//output object -출력담당 객체
var output = {}; //객체를 하나 생성
output.text = document.getElementById('output');
output.print = function (str) {
    this.text.innerHTML = str;
};
output.display = function () {
    this.text.innerHTML = input.getInput()
};
//calculator object - 계산담당 객체
var calculator = {};
calculator.calculate = function (first, second, op) {
    var ret;
    switch (op) {
        case "+":
            ret = first + second;
            break;
        case "-":
            ret = first - second;
            break;
        case "*":
            ret = first * second;
            break;
        case "/":
            ret = first / second;
            break;
        default:
            return NaN;
    }
    return ret;
};

//##############################
var clickNumbers = function (event) {
    var str = event.target.innerHTML;
    console.log(str);

    if (str === 'BS') {
        input.array.pop();
    } else if (str === '+' || str === '-' || str === '*' || str === '/') {
        input.array.push(' ' + str + ' ');
    } else {
        input.array.push(str);
    }

    if (input.isEmpty()) {
        output.text.innerHTML = "0"; //"Empty 대신 0이 나오게 해줌"
    } else {
        output.display();
        // output.text.innerHTML = input.getInput();
    }

}

var showResult = function () {
    input.prepareCalculate();

    var result = input.getValue();
    console.log(result);
    while (!input.isEmpty()) {
        var op = input.getOperator();
        var second = input.getValue();
        result = calculator.calculate(result, second, op);
        console.log(op, second, result);
    }
    output.print(result);
    input.removeAll(result);
}
