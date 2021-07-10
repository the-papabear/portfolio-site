const boardLetters = document.querySelector('.board-text-container').querySelectorAll('span');

let i = 0;
const animation = function(){
    setTimeout(() => {
        boardLetters[i].style.visibility='visible';
        i++;
        if(i < boardLetters.length){
            animation();
        }
    }, 100)
};

animation();