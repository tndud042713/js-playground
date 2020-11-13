gugudan = {}; //객체 선언
gugudan.result = []; //객체에 결과값을 담는 배열을 선언한다.
gugudan.current = -1;
var k;
gugudan.calculate = function (n) {
    this.current = n;
    for (var i = 0; i < 9; i++) {
        this.result[i] = n * (i + 1);
    }

}

gugudan.print = function () {
    for (var i = 0; i < 9; i++) {
        var x = this.current;
        var t = i + 1;
        var y = this.result[i];
        document.write(x + "*" + t + "=" + y + "<br>");
    }
}

    gugudan.calculate(3);
    gugudan.print();
