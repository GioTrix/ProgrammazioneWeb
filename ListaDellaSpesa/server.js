const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    res.send("Ciao");
});
// fetch("lista.json")
// .then(res => res.json())
// .then(data => {
//     const ul = document.createElement("ul");
//     document.querySelector("main-content").appendChild(ul);
//     data.forEach(item => {
//         const li = document.createElement("li");
//         li.innerHTML = item.prodotto + " " + item.desc;
//         document.querySelector("ul").appendChild(li);
//     });
// });

