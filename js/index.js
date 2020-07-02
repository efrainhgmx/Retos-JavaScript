function candiesForChild(kids) {
    let candies = 0;
        for( let i = kids; i > 0; i--) {
            candies += i;
            document.write(`Al niño ${i} le tocan ${i} dulces <br/>`);
        }
        document.write(`Total de de dulces para ${kids} niños es ${candies} dulces`);
}

let dulces = parseInt(prompt('Acuantos niños les vamos a dar dulces?'));
candiesForChild(dulces); 