var buttons=document.querySelector(".keys");
var otps=document.getElementById("input");
var inputs="";
var trii=document.getElementById("trii");
otps.focus();
var alpha=document.querySelectorAll(".alpha");
var spacess=document.querySelector(".space");
var back=document.querySelector(".back");
var enterkey=document.querySelector(".enter");
var newElem = document.createElement("BR");
var shiftkey = document.querySelector(".shift");
var i;
var trails=otps.value;

buttons.addEventListener("click",e=>{
    if (e.target.matches("button")&& e.target.matches(".alpha")) {
        otps.value+= otps.textContent + e.target.textContent;
       
      }
})
spacess.addEventListener("click",e=>{
    if(e.target.matches(".space")){
        otps.value+=spacess.value;
        
    }
})
back.addEventListener("click",e=>{
    if(e.target.matches(".back")){
        
        otps.value=otps.value.slice(0, otps.value.length-1);
        
    }
})
enterkey.addEventListener("click",e=>{
    if(e.target.matches(".enter")){
        otps.value+='\n';
        
    }
})
shiftkey.addEventListener("click",e=>{
    for(i=0;i < alpha.length;i++){
        if (alpha[i].textContent===alpha[i].textContent.toLowerCase()){
            alpha[i].textContent=alpha[i].textContent.toUpperCase()
        }else{alpha[i].textContent=alpha[i].textContent.toLocaleLowerCase()
        console.log(alpha[i].textContent)}
    }
})
