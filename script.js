const bodyel=document.querySelector("body")
// let s=document.querySelector("span");
bodyel.addEventListener("mousemove",(e)=>{
    let x=e.offsetX;
    let y=e.offsetY;
    console.log(x,y);
    let sp=document.createElement("span")
    sp.style.left=x + "px";
    sp.style.top=y + "px";
    const size=Math.random()*100;
    sp.style.width=size + "px";
    sp.style.height=size + 'px';
    bodyel.appendChild(sp);
    setTimeout(()=>{
        sp.remove();
    },3000)

})