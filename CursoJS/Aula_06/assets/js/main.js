// const request = obj => {
//     return new Promise((resolve, reject) => {
//         // xhr é a sigla de XMLHttpRequest
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true); // Para GET
//         xhr.send();// Para POST
    
//         xhr.addEventListener('load', () => {
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.responseText);
//             } else{
//                 reject(xhr.statusText);
//             }
//         });
//     });
// };

document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
    
        if(response.status !== 200) throw new Error('MEU ERRO 404.');
    
        const html = await response.text();
        loadResult(html);
    }catch(e){
        console.error(e)
    }
}

function loadResult(response){
    const result = document.querySelector('.resultado');
    result.innerHTML = response;     
}


fetch('pagina1.html')
    .then(resposta => {
        if (resposta.status !== 200) throw new Error('MEU ERRO 404.');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.error(e));