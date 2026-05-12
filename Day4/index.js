let inp=document.querySelector("input");
let h2=document.querySelector("h2");
inp.addEventListener("input",function(e){
    h2.innerText=e.target.value;
})