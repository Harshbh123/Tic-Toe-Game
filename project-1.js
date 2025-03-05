let button = document.querySelectorAll(".box");
let msgcont = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");
let hide = document.querySelector(".hide");
let newgame = document.querySelector(".newgame");
let Container = document.querySelector(".Container");
let reset = document.querySelector(".reset");
let val = true;
let arr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];
const disabled = () => {
  for (let btn of button) {
    btn.disabled = true;
  }
}

const enabled = () => {
  for (let btn of button) {
    btn.disabled = false;
    btn.innerText = "";
    btn.style.color = "";
  }
}





button.forEach((box) => {
  box.addEventListener("click", () => {
    if (val) {
      box.innerText = "O";
      box.style.color = "White";

      val = false;
    }
    else {
      box.innerText = "X";
      val = true;
    }
    box.disabled = true;
    Winner();
  })

})
const Winner = () => {
  let winnerfound=false;
  for (let pos of arr) {
    let pos1 = button[pos[0]].innerText;
    let pos2 = button[pos[1]].innerText;
    let pos3 = button[pos[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("winner", pos1);
        msg.innerHTML = `Congratulation the winner is ${pos1}`;
        newgame.classList.remove("hide");
        msg.classList.remove("hide");
        disabled();
        winnerfound=true;
        break;
      }
    }
  }
  if(winnerfound===false)
  {
    let allbutton=true;
    for(let btn of button)
    {
      if(btn.innerText==="")
      {
        allbutton=false;
        break;
      }
    }
    if(allbutton)
    {
      msg.innerText="It's a draw!No Winner";
      newgame.classList.remove("hide");
      msg.classList.remove("hide");
    }
  }
}
const resetgame = () => {

  for (let btn of button) {
    val = true;
    enabled();
    newgame.classList.add("hide");
    msg.classList.add("hide");

  }
}


reset.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);