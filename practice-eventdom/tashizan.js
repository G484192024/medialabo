function greeting(){
    let i = document.querySelector('input[name="left"]');
    let j = document.querySelector('input[name="right"]');
    let a = Number(i.value);
    let b = Number(j.value);
    let kotae = a+b;
    p = document.querySelector('span#answer');
    p.textContent = kotae;
}

let btn = document.querySelector('button#calc');

btn.addEventListener('click',greeting); 