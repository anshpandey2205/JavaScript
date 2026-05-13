let inp=document.querySelector("input");
let button=document.querySelector("button");
for(let btn of button){
    btn.addEventListener("click",function(){
        let btntext=btn.innerText
        console.log(btntext);
        if(btntext==="C"){
            inp.value="";
    }else if(btntext==="="){
        inp.value=eval(inp.value);
    }else{
        inp.value+=btntext;
    }
    })
    