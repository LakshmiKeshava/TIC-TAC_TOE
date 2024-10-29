var boxes = document.querySelectorAll('.box');
var resetBtn = document.querySelector('.reset');

var msg = document.querySelector("#msg");

var newBtn = document.querySelector("#new-btn")

const winning_patterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

var turnO = true;
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        console.log("Button clicked");
    })
})

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const restGame = ()=>{
    turnO=true;
    enableBoxes();
    msg.classList.add("hide");
    
}
const showWinner =(winner)=>{
msg.innerText=`Winner is ${winner}`;
msg.classList.remove("hide");

}
 const checkWinner = ()=> {
    console.log("Function triggered");
    for(let pattern of winning_patterns){
        
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
       

        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
          console.log("inside if");
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                showWinner(pos1Value);
               disableBoxes();
               resetBtn.classList.add("hide");
            }
        }
    }
}

resetBtn.addEventListener("click", ()=>{
    enableBoxes();
})
newBtn.addEventListener("click", ()=>{
    enableBoxes();
    resetBtn.classList.remove("hide");
    msg.classList.add("hide");
})



