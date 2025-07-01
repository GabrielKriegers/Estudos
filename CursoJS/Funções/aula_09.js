function* geradora1() {
    // Pode ter código antes... 
    yield 'Valor 1';
    // E depois...
    yield 'Valor 2';
    // E depois...
    yield 'Valor 3';
}


function* gerador2() {
    let i = 0;
    while (true){
        yield i;
        i++;
    }
}

function* gerador3() {
    yield 1;
    yield 2;
    yield 3;
}

function* gerador4() {
    yield* gerador3();
    yield 4;
    yield 5;
    yield 6;
}


function* gerador5() {
    yield () => {
        console.log('Yield 1');
    }
    
    yield () => {
        console.log('Yield 2');
    }
}

const g5 = gerador5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();