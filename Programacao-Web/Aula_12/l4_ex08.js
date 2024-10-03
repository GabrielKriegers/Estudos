var array = [3, 2, 4]

function empty(lista){
    if (lista.length == 0){
        return true;
    }else{
        return false;
    }
}

function media(lista){
    let media = 0;
    if (lista.length == 0){
        return -1;
    }else{
        for (let i = 0; i < lista.length; i++){
            media += lista[i];
        }
        return media/(lista.length);
    }
}

function maior(lista){
    if (lista.length == 0){
        return -1;
    }else{
        maior = lista[0]; 
        for (let i = 0; i < lista.length; i++){
            if (maior < lista[i]){
                maior = lista[i];
            } 
            
        }
        return maior;
    }
}

function menor(lista){
    if (lista.length == 0){
        return -1;
    }else{
        menor = lista[0]; 
        for (let i = 0; i < lista.length; i++){
            if (menor > lista[i]){
                menor = lista[i];
            } 
        }
        return menor;
    }
}

console.log(media(array));
console.log(empty(array));
console.log(maior(array));
console.log(menor(array));
