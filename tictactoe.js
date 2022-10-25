var divs = document.querySelectorAll(".yuti")
var counter = 0;
var maintext = document.querySelector(".main-text")
var xscore = 0
var oscore = 0
var scoretextx = document.querySelector(".scoretextx")
var scoretextxo = document.querySelector(".scoretexto")
var resetgilaki = document.querySelector(".reset-gilaki")
var replaygilaki = document.querySelector(".replay-gilaki")

addDrawing();

function addDrawing() {
    for(var i of divs){
        i.addEventListener("click", drawInside)
    }
}

function removeDrawing(){
    for(var i of divs){
        i.removeEventListener("click", drawInside)
        counter = 0;
    }
}

function drawInside() {
    for(var i of divs){
        if(this.innerHTML == ""){
            counter++
            counter%2 ==1 ? this.innerHTML = "X" : this.innerHTML = "O"
        }
    } win();    
}

resetgilaki.addEventListener("click", function(){
    xscore = 0
    oscore = 0
    counter = 0
    scoretextx.innerHTML = "X-score:" + xscore
    scoretextxo.innerHTML = "O-score:" + oscore
    for(var i of divs){
        i.innerHTML = ""; 
        i.style.boxShadow = "0px 0px 0px 0px #fff"
    }
    maintext.innerHTML = "Tic-Tac-Toe!";
    addDrawing();
})

replaygilaki.addEventListener("click", function(){
    maintext.innerHTML = "Tic-Tac-Toe!"
    for(var i of divs){
        i.innerHTML = ""; 
        i.style.boxShadow = "0px 0px 0px 0px #fff"
    }
    counter = 0
    addDrawing()
})

function winningTextX(){
    maintext.innerHTML = "X player Won the Game!"
    xscore++
    scoretextx.innerHTML = "X-score:" + xscore
}

function winningTextO(){
    maintext.innerHTML = "O player Won the Game!"
    oscore++
    scoretextxo.innerHTML = "O-score:" + oscore
}

function win(){
    
        if(divs[0].innerHTML == "X" && divs[1].innerHTML == "X" && divs[2].innerHTML == "X"){
            winningTextX();
            removeDrawing();
            divs[0].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[1].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[2].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[3].innerHTML == "X" && divs[4].innerHTML == "X" && divs[5].innerHTML == "X"){
            winningTextX();
            removeDrawing();
            divs[3].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[4].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[5].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[6].innerHTML == "X" && divs[7].innerHTML == "X" && divs[8].innerHTML == "X"){
            winningTextX();
            removeDrawing();
            divs[6].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[7].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[8].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[0].innerHTML == "X" && divs[3].innerHTML == "X" && divs[6].innerHTML == "X"){
            winningTextX();
            removeDrawing();
            divs[0].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[3].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[6].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[1].innerHTML == "X" && divs[4].innerHTML == "X" && divs[7].innerHTML == "X"){
            winningTextX();
            removeDrawing();
            divs[1].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[4].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[7].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[2].innerHTML == "X" && divs[5].innerHTML == "X" && divs[8].innerHTML == "X"){
            winningTextX();
            removeDrawing();
            divs[2].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[5].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[8].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[0].innerHTML == "X" && divs[4].innerHTML == "X" && divs[8].innerHTML == "X"){
            winningTextX();
            removeDrawing();
            divs[0].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[4].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[8].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[2].innerHTML == "X" && divs[4].innerHTML == "X" && divs[6].innerHTML == "X"){
            winningTextX();
            removeDrawing();
            divs[2].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[4].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[6].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[0].innerHTML == "O" && divs[1].innerHTML == "O" && divs[2].innerHTML == "O"){
            winningTextO();
            removeDrawing();
            divs[0].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[1].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[2].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[3].innerHTML == "O" && divs[4].innerHTML == "O" && divs[5].innerHTML == "O"){
            winningTextO();
            removeDrawing();
            divs[3].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[4].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[5].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[6].innerHTML == "O" && divs[7].innerHTML == "O" && divs[8].innerHTML == "O"){
            winningTextO();
            removeDrawing();
            divs[6].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[7].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[8].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[0].innerHTML == "O" && divs[3].innerHTML == "O" && divs[6].innerHTML == "O"){
            winningTextO();
            removeDrawing();
            divs[0].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[3].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[6].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[1].innerHTML == "O" && divs[4].innerHTML == "O" && divs[7].innerHTML == "O"){
            winningTextO();
            removeDrawing();
            divs[1].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[4].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[7].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[2].innerHTML == "O" && divs[5].innerHTML == "O" && divs[8].innerHTML == "O"){
            winningTextO();
            removeDrawing();
            divs[2].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[5].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[8].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[0].innerHTML == "O" && divs[4].innerHTML == "O" && divs[8].innerHTML == "O"){
            winningTextO();
            removeDrawing();
            divs[0].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[4].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[8].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(divs[2].innerHTML == "O" && divs[4].innerHTML == "O" && divs[6].innerHTML == "O"){
            winningTextO();
            removeDrawing();
            divs[2].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[4].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
            divs[6].style.boxShadow= "0px 0px 16px 19px rgba(17,245,108,1)"
        }else if(
        (divs[0].innerHTML == "X" || divs[0].innerHTML == "O") && 
        (divs[1].innerHTML == "X" || divs[1].innerHTML == "O") && 
        (divs[2].innerHTML == "X" || divs[2].innerHTML == "O") && 
        (divs[3].innerHTML == "X" || divs[3].innerHTML == "O") && 
        (divs[4].innerHTML == "X" || divs[4].innerHTML == "O") && 
        (divs[5].innerHTML == "X" || divs[5].innerHTML == "O") &&
        (divs[6].innerHTML == "X" || divs[6].innerHTML == "O") && 
        (divs[7].innerHTML == "X" || divs[7].innerHTML == "O") && 
        (divs[8].innerHTML == "X" || divs[8].innerHTML == "O")  ){
            divs[0].style.boxShadow= "0px 0px 16px 19px rgba(245,17,63,1)"
            divs[1].style.boxShadow= "0px 0px 16px 19px rgba(245,17,63,1)"
            divs[2].style.boxShadow= "0px 0px 16px 19px rgba(245,17,63,1)"
            divs[3].style.boxShadow= "0px 0px 16px 19px rgba(245,17,63,1)"
            divs[4].style.boxShadow= "0px 0px 16px 19px rgba(245,17,63,1)"
            divs[5].style.boxShadow= "0px 0px 16px 19px rgba(245,17,63,1)"
            divs[6].style.boxShadow= "0px 0px 16px 19px rgba(245,17,63,1)"
            divs[7].style.boxShadow= "0px 0px 16px 19px rgba(245,17,63,1)"
            divs[8].style.boxShadow= "0px 0px 16px 19px rgba(245,17,63,1)"
            maintext.innerHTML = "It's a Tie! Hit Replay Button for a rematch"
        }
}
