let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let score=document.querySelector(".score")
let turnO = true
const win=[

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]
boxes.forEach((box)=>{

    box.addEventListener("click",()=>{
        console.log("clicked")
        if (turnO) {

            box.innerHTML="<b>O</b>"
            turnO=false;
        }
        else{
            box.innerHTML="<b>X</b>"
            turnO=true;
        }
        box.disabled=true;
        winner()


    })
const winner=()=>{
    for(let i of win){
        if(boxes[i[0]].innerHTML===boxes[i[1]].innerHTML&& boxes[i[0]].innerHTML===boxes[i[2]].innerHTML&&boxes[i[0]].innerHTML==="<b>X</b>"){
            console.log("winner found X")
            score.classList.remove("hide")
            score.innerHTML="<b> Winner is X</b>"
            for (let y of boxes ){
                y.disabled=true;
            }
        }
        else if(boxes[i[0]].innerHTML===boxes[i[1]].innerHTML&& boxes[i[0]].innerHTML===boxes[i[2]].innerHTML&&boxes[i[0]].innerHTML==="<b>O</b>"){
            console.log("winner found O")
            score.classList.remove("hide")
            score.innerHTML="<b> Winner is O</b>"
            for (let y of boxes ){
                y.disabled=true;
            }
        }
    }



}

    }
)

reset.addEventListener("click", ()=>{

    for (let i of boxes){
        i.disabled=false;
        i.innerHTML=""
        score.classList.add("hide")
    }
})


