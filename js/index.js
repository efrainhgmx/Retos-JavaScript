function candiesForChild(kids) {
    let candies = 0;
        for( let i = kids; i > 0; i--) {
            candies += i;
            result.innerHTML += `<p> Al niño ${i} le tocan ${i} dulces </p>`;
        }
       totalCandies.innerHTML = `Total de de dulces para ${kids} niños es ${candies} dulces`;
}

function candy () {
    let n = document.getElementById('kids');
    let childNumber = parseInt(n.value);

    candiesForChild(childNumber);
}

let result = document.getElementById('result');
let totalCandies = document.getElementById('suma');
let button = document.getElementById('button');
button.addEventListener('click', candy);