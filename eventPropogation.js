let gp = document.querySelector(".grandParent")
let p = document.querySelector(".parent")
let c = document.querySelector(".child")


function grandParent(){
    console.log("grandParent")
}
gp.addEventListener("click", grandParent, true)

function parent(){
    console.log("parent")
}
p.addEventListener("click", parent, true)

function child(){
    console.log("child")
}
c.addEventListener("click", child, true)
//! if 3rd arg is true it will act as event capturing 
//? if false it will act as a event bubbling

