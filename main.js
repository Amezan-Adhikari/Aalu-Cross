let currentPlayer="O";
let ScoreO=0,ScoreX=0;
let table = document.getElementsByClassName("table");
let winIndex = [
    [0,1,2,"horizontal"],
    [3,4,5,"horizontal"],
    [6,7,8,"horizontal"],
    [0,3,6,"vertical"],
    [1,4,7,"vertical"],
    [2,5,8,"vertical"],
    [2,4,6,"tiltRight"],
    [0,4,8,"tiltLeft"],
];
const checkButton = (x) =>{

    table[x].innerHTML =`${currentPlayer}`;
    table[x].disabled = true;
    
    if(currentPlayer=="O"){
        currentPlayer="X";
        document.getElementById("currentPlayer").innerHTML = "X";
        document.getElementById("currentPlayer").classList.add("playerX");
        document.getElementById("currentPlayer").classList.remove("playerO");
    }
    else{
        currentPlayer="O";
        document.getElementById("currentPlayer").innerHTML = "O";
        document.getElementById("currentPlayer").classList.add("playerO");
        document.getElementById("currentPlayer").classList.remove("playerX");
    }
       
        checkResult();
    }
    

const resetbtn=()=>{
    for(let i =0 ;i<9;i++){
        table[i].disabled = false;
        table[i].innerHTML='';
        document.getElementsByClassName("lines")[i].classList.remove("horizontal","vertical","tiltLeft","tiltRight");
    }
    currentPlayer="O";
    document.getElementById("currentPlayer").innerHTML = "O";
    document.getElementById("currentPlayer").classList.add("playerO");
    document.getElementById("currentPlayer").classList.remove("playerX");
}


const checkResult =()=>{
winIndex.forEach(win => {
    let notempty = true;
    for(let i = 0; i <3 ; i++){
        if(table[win[i]].innerHTML==''){notempty = false}
    }
    if(notempty == true && table[win[0]].innerHTML == table[win[1]].innerHTML && table[win[1]].innerHTML == table[win[2]].innerHTML ){
        for(let i = 0; i <3 ; i++){
            document.getElementsByClassName("lines")[win[i]].classList.add(win[3]);
        }
        for (let i = 0; i < 9 ; i++) {
            table[i].disabled = true;
        }
        if(currentPlayer=='X'){
            document.getElementsByClassName("ScoreO")[0].innerHTML = `O : ${++ScoreO}`
        }
        else{
            document.getElementsByClassName("ScoreX")[0].innerHTML = `X : ${++ScoreX}`
        }
    
}
});
}
