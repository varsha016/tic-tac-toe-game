gsap.from(".box", {
  opacity: 0,
  duration: 2,
  stagger: {
    each: 0.4,
    grid: "auto",
    from: "center",
  },
});
var chance = true;
function game(arg) {
  var box = document.querySelector(arg).classList;

  if (
    !(box.contains("bg-red") || box.contains("bg-blue"))
  ) {
    chance ? box.add("bg-red") : box.add("bg-blue");
    chance = !chance; // toggle chance
    gsap.to(arg, { scale: 0.8, duration: 0.5 });
  }
  checkWinner()
}
function checkWinner() {
  isWinner("#div1", "#div2", "#div3", "bg-blue") && alert("blue Win")
  isWinner("#div1", "#div2", "#div3", "bg-blue") && alert("red Win")




  var box1 = document.querySelector("#div1").classList.contains("bg-red");
  var box2 = document.querySelector("#div2").classList.contains("bg-red");
  var box3 = document.querySelector("#div3").classList.contains("bg-red");
  console.log(box1, box2, box3);
  if (box1 && box2 && box3) {
    alert("hury red winner")

  }
  if (isWinner("#div1", "#div2", "#div3", "bg-blue")) {
    alert("blue Winner")
  }
  if (iswinner("#div1", "#div5", "#div9", "bg-blue")) {
    alert("blue Winner")
  }

}


