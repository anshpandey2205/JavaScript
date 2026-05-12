let inp=document.querySelector("input");
let h2=document.querySelector("h2");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    console.log("clicked");
    let data=inp.value;
    h2.innerText=data;
    inp.value="";
})
inp.addEventListener("input",function(e){
    h2.innerText=e.target.value;
})