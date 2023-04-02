"use strict";

let num=document.getElementById('num');
let inp=document.getElementById('inp');
let btn=document.getElementById('btn');

let random=Math.round(Math.random() * 10);
let count=3;

btn.addEventListener('click', ()=>{
    count--;
    num.innerHTML=count;
    inp.value='';
    if(inp.value==random){
        alert('Qazandiniz)');
    }
    else if(count==0){
        alert(`Uduzdunuz( Dogru cavab:${random}`);
    }
    else if(inp.value>random){
        alert('Daxil olunan eded boyukdur!');
    }
    else{
        alert('Daxil olunan eded kicikdir!');
    }
})