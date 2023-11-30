const name = document.getElementById('name');
const btn = document.getElementById('btn')
const out1 = document.getElementById('output1')


function submitDetail(){
    out1.innerHTML = name.value;
}

btn.addEventListener('click', submitDetail);