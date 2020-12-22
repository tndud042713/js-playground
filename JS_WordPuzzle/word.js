var word1 = document.getElementById('word1'); // answer 
var word2 = document.getElementById('word2'); // buttons
var check = document.getElementById('check'); // word1 === word2? 조건을 위해서 필요함

//game objects
var game = { 'btns': [] };
game.words = 'apple,linux,javascript,tutorial,baby,girlfriend,legend'.split(','); //이렇게 하면 배열에 저것들을 넣을 수 있음

//choose 1 word from words;
game.choose = function () {
    var idx = Math.floor(Math.random() * this.words.length);
    this.answer = this.words[idx];
    this.letters = this.answer.split('');
    word1.innerHTML = this.answer;
};

game.addButtons = function () {
    for (var i = 0; i < this.letters.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    }
};

game.updateDisplay = function () {
    var gameStr = this.letters.join('');
    if (this.answer == gameStr) {
        check.innerHTML = '일치합니다';
    } else {
        check.innerHTML = '일치하지 않습니다';
    }
};

game.init = function () {
    this.choose();
    this.addButtons();
    this.updateDisplay();
};

game.init();

game.copyBtnText = function () {
    for (var i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i];
    }
};

//event handler for swap button
var swap = function () {
    // console.log('swap');//확인용 콘솔
    var temp = []; //copy and swap
    while (game.letters.length != 0) {
        var s = game.letters.pop();
        temp.push(s);
    }
    game.letters = temp;
    game.copyBtnText();
    game.updateDisplay();
};



var rshift = function () {
    // console.log('rshift');//확인용 콘솔
    var s = game.letters.pop();
    game.letters.unshift(s); // 강사풀이가 훨씬 간결하고 단순함
    game.copyBtnText();
    game.updateDisplay();
};

var lshift = function () {
    // console.log('lshift');//확인용 콘솔
    var s = game.letters.shift(); //왼쪽에서 빼고
    game.letters.push(s); //오른쪽으로 넣는다.
    game.copyBtnText();
    game.updateDisplay();
};

//shuffle
game.shuffle = function () {
    var toggle = Math.floor(Math.random() * 2) === 0;
    if (toggle) {
        swap();
    }
    var n = Math.floor(Math.random() * game.answer.length);
    for (var i = 0; i < n; i++) {
        rshift();
    }
};
game.shuffle(); // 위에 만들어준 함수 호출