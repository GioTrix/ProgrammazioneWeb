const ctrlMenu = document.querySelector('.ctrl-menu');
const ctrlArticoli = document.querySelector('.ctrl-articoli');
let isClicked = true;

fetch('file.json')
.then(res => res.json())
.then(data =>{
    data.forEach(el => {
        const section = document.createElement('section');
        const li = document.createElement('li');
        const ul = document.createElement('ul');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        section.classList.add('article');
        h3.innerHTML = el.titolo;
        p.innerHTML = el.contenuto;
        li.appendChild(h3);
        li.appendChild(p);
        ul.appendChild(li);
        section.appendChild(ul);
        document.querySelector('main-content').appendChild(section);
    });
});


ctrlMenu.addEventListener('click', ()=>{
    const dynMenu = document.querySelector('.dyn-menu');
    dynMenu.classList.toggle('hidden');
    ctrlMenu.classList.toggle('color');
});

//quando l'utente clicca su 'articoli' i tre articoli cambiano casualmente l'ordine
ctrlArticoli.addEventListener('click', () =>{
    let articoli = document.querySelectorAll('.article');
    let arr = [1,2,3];
    
    shuffle(arr);

    articoli.forEach(element => {
        element.style.order = arr.shift();
    });
});

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
};