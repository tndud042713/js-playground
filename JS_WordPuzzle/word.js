var word1 = document.getElementById('word1');
var word2 = document.getElementById('word2');
var check = document.getElementById('check');

var words = 'apple,linux,javascript,tutorial,baby,girlfriend,legend'.split(','); //이렇게 하면 배열에 저것들을 넣을 수 있음
var game={};
game.choice = function(){
    var idx = Math.floor(Math.random()*words.length);
    return words[idx];
}
var answer = game.choice();
word1.innerHTML = answer;

game.word = answer.split('');
game.btns = [];

game.updateDisplay = function(){
    if(answer == game.word.join('')){
        check.innerHTML = '일치합니다';
    }else{
        check.innerHTML = '일치하지 않습니다';
    }
}

for (var i = 0; i < answer.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = answer[i];
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
    var temp = []; //copy and swap
    while(game.word.length !=0){
        var s = game.word.pop();
        temp.push(s);
    }
    game.word = temp;
    game.copyBtnText();
    game.updateDisplay();
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

//shuffle

var toggle = Math.floor(Math.random()*2) === 0;

if(toggle){
    // swap(); -실제로 섞이는지 확인하기전 swap 되는지 확인하는 코드
}

var n = Math.floor(Math.random() * answer.length);

for(var i=0; i<n ; i++){
    rshift();

}