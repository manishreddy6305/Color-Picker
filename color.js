var value=[0,0,0,0];
let red=document.getElementById("red");
let blue=document.getElementById("blue");
let green=document.getElementById("green");
let alpha=document.getElementById("Alpha");
let body_color=document.getElementById('body');
let copy_value=document.getElementById('value');
let icon=document.getElementsByClassName('icon')[0];
let alert_text=document.getElementsByClassName('copy')[0];
red.addEventListener('input',()=>{
    alert_text.style.display= "none";
    value[0]=red.value;
    let ans=`rgba(${value[0]},${value[1]},${value[2]},${value[3]})`;
    body_color.style.backgroundColor=`${ans}`;
    copy_value.textContent=ans;
})
blue.addEventListener('input',()=>{
    alert_text.style.display= "none";
    value[1]=blue.value;
    let ans=`rgba(${value[0]},${value[1]},${value[2]},${value[3]})`;
    body_color.style.backgroundColor=`${ans}`;
    copy_value.textContent=ans;
})
green.addEventListener('input',()=>{
    alert_text.style.display= "none";
    value[2]=green.value;
    let ans=`rgba(${value[0]},${value[1]},${value[2]},${value[3]})`;
    body_color.style.backgroundColor=`${ans}`;
    copy_value.textContent=ans;
})
alpha.addEventListener('input',()=>{
    alert_text.style.display= "none";
    value[3]=alpha.value;
    let ans=`rgba(${value[0]},${value[1]},${value[2]},${value[3]})`;
    body_color.style.backgroundColor=`${ans}`;
    copy_value.textContent=ans;
})
icon.addEventListener('click',()=>{
     navigator.clipboard.writeText(copy_value.textContent);
     alert_text.style.display= "initial";
     let ans=`rgba(${value[0]},${value[1]},${value[2]},${value[3]})`;
     alert_text.style.color= `${ans}`;
})

