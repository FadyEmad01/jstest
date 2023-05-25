let btn =document.querySelectorAll("button");
let odiv =document.querySelector(".order")

function order(){
if (odiv.classList.contains("close")) {
    odiv.classList.remove("close")

}
else{
    odiv.classList.add("close")
    
}
}

btn[1].addEventListener('click',order)
btn[2].addEventListener('click',order)
btn[3].addEventListener('click',order)
btn[4].addEventListener('click',order)