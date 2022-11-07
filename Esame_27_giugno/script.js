const change = document.querySelector('.cc');
const confA = document.querySelector('.a');
const confB =document.querySelector('.b');
let isClicked = false;
let isChanged = true;

change.addEventListener('click', () =>{
    const mybody = document.querySelector('body');
    const mylink = document.querySelectorAll('a');
    fetch('file.json')
    .then(res => res.json())
    .then(el =>{
        if (isChanged){
        mybody.style.backgroundColor = el.background;
        mylink.forEach(el2 => {
            el2.style.color = el.link; 
        });
        document.documentElement.style.setProperty("--border", el.border);
        isChanged = false;
        } else{
            mybody.style.backgroundColor = '#022B3A';
            mylink.forEach(el2 => {
                el2.style.color = '#1F7A8C'; 
            });
            document.documentElement.style.setProperty("--border", '#022B3A');
            isChanged = true;              
        }
    });
});

confA.addEventListener('click', () => {
    const menu = document.querySelector('nav');
    const myaside = document.querySelector('aside');
    const myli = document.querySelectorAll('li');
    if(isClicked){
        menu.style.order = '4';
        myaside.style.order ='2';
        myli.forEach(el3 =>{
            el3.style.textAlign = 'left';
            el3.style.paddingLeft = '10px';
        });
        isClicked = false;    
    }
    else{
        menu.style.order = '2';
        myaside.style.order ='4';
        myli.forEach(el3 =>{
            el3.style.textAlign = 'right';
        });
        isClicked = true;
    }
});

confB.addEventListener('click', () => {
    const title = document.querySelector('.title');
    title.style.textAlign = 'center';
    setTimeout(()=>{
        title.style.textAlign = 'left';
    },3000);
});