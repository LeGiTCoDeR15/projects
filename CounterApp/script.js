let value = document.getElementById("val");
let min = document.getElementById("minus");
let plus = document.getElementById("plus");

var i = value.innerHTML;

min.addEventListener('click', ()=>{
    i--;
    value.textContent = i;
});

plus.addEventListener('click', ()=>{
    i++;
    value.textContent = i;
});