var str = document.getElementById('word1').innerHTML;
var word2 = document.getElementById('word2');

var game = {};
game.word = str.split('');
game.btns = [];

for (var i = 0; i < str.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = str[i];
    word2.appendChild(btn);
    game.btns.push(btn);
}

game.copyBtnText = function () {
    for (var i = 0; i < this.word.length; i++) {
        this.btns[i].innerHTML = this.word[i];
    }
};

var swap = function (event) {
    console.log('swap');
};



var rshift = function (event) {
    console.log('rshift');
    var s = game.word.pop();
    game.word.unshift(s); // 강사풀이가 훨씬 간결하고 단순함
    game.copyBtnText();
};

var lshift = function (event) {
    console.log('lshift');
    var s = game.word.shift(); //왼쪽에서 빼고
    game.word.push(s); //오른쪽으로 넣는다.
    game.copyBtnText();
};