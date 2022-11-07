const tot = document.createElement('p');
let sum = 0;

fetch('file.json')
.then(res => res.json())
.then(data =>{
    data.forEach(el => {
        const li = document.createElement('li');
        const bt = document.createElement('button');
        li.innerHTML = el.desc +" " +el.numero;
        li.appendChild(bt);
        bt.innerHTML = 'Rimuovi';
        document.querySelector('ul').appendChild(li);
        sum += parseInt(el.numero);
        tot.innerHTML='totale:' + ' ' + sum;
        document.querySelector('ul').appendChild(tot);
        bt.addEventListener('click', () =>{
            li.classList.toggle('hidden');
            sum -= parseInt(el.numero);
            tot.innerHTML='totale:' + ' ' + sum;;
        })    
    });
})