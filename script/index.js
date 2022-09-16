const nav = document.getElementById('nav');
const ham = document.getElementById('ham');

ham.onclick = ()=> {
    nav.classList.toggle('vis');
    nav.style.transition = "translate .2s ease-out";
}

addEventListener('resize', ()=>{
    nav.style.transition = "none";
})