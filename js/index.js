function candiesForChild(kids) {
    let candies = 0;
        for( let i = kids; i > 0; i--) {
            candies += i;
            document.write(`Al niño ${i} le tocan ${i} dulces <br/>`);
        }
        document.write(`Total de de dulces para ${kids} niños es ${candies} dulces`);
}

function control() {
    if(children > 0) {
        candiesForChild(children);
    } else {
        console.log('No hay nada');
    }
}

let n = document.getElementById('kids');
let child = parseInt(n.value);
let children = child;
let b = document.getElementById('enviar');
b.addEventListener('click', control);
