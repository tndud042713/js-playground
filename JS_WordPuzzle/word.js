var word1 = document.getElementById('word1'); // answer 
var word2 = document.getElementById('word2'); // buttons
var check = document.getElementById('check'); // word1 === word2? 조건을 위해서 필요함
var progress = document.getElementById('progress'); // progress check

//game objects
var game = {
    'btns': [],
    'maxPlay': 3,
    'current': 0
};
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
game.removeButtons = function(){
    for(var i=0;i<this.btns.length;i++){
        word2.removeChild(this.btns[i]);
    }
    this.btns = [];
};

game.checkGood = function(){
    return this.answer === this.letters.join('');
};

game.updateDisplay = function () {
    // var gameStr = this.letters.join('');
    if (this.checkGood()) {
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

game.swap = function () {
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
game.rshift = function () {
    // console.log('rshift');//확인용 콘솔
    var s = game.letters.pop();
    game.letters.unshift(s); // 강사풀이가 훨씬 간결하고 단순함
    game.copyBtnText();
    game.updateDisplay();
};

game.lshift = function () {
    // console.log('lshift');//확인용 콘솔
    var s = game.letters.shift(); //왼쪽에서 빼고
    game.letters.push(s); //오른쪽으로 넣는다.
    game.copyBtnText();
    game.updateDisplay();
};

game.progress = function(){
    if (game.checkGood()){
        game.current++; // 맞출때마다 1 증가시켜줌
        game.removeButtons();
        game.init(); // 맞출때마다 게임을 초기화시켜줌
        game.shuffle(); // 맞출때 다시 섞어야함
        var str = "";
        for(var i=0; i<game.current; i++){
            str += "O";// 화면에 하나씩 O를 추가한다
        }
        progress.innerHTML = str; // O를 progress 파트에 추가한다.
    }
    if (game.current == game.maxPlay){
        alert("Good! Thank you for playing");
    }
};
//event handler for swap button
var swap = function () {
    game.swap();
    game.progress();
};

var rshift = function () {
    game.rshift();
    game.progress();
};

var lshift = function () {
    game.lshift();
    game.progress();
};

//shuffle
game.shuffle = function () {
    var toggle = Math.floor(Math.random() * 2) === 0; //toggle 이 0이냐 1이냐    
    if (toggle) {
        game.swap();
    }
    var n = Math.floor(Math.random() * (game.answer.length-1));
    for (var i = 0; i < n; i++) {
        game.rshift();
    }
};
game.shuffle(); // 위에 만들어준 함수 호출