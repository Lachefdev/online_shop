'use strict';

const elements = {}

//FUNKTIONEN
const addToBasket = product => {

    let loadedData = localStorage.getItem('warenkorb');
    warenkorb = loadedData ? JSON.parse(loadedData) : {};

    if (warenkorb[product.id]){
        warenkorb[product.id]++
    } else {
        warenkorb[product.id] = 1;
    }
    localStorage.setItem('warenkorb', JSON.stringify(warenkorb));   
}

const renderCollection = () => {
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        components.piece(product, elements.katalog);
    }
}

const domMapping = () => {
    elements.katalog = document.querySelector('#collection');
}

const init = () => {
    domMapping();
    renderCollection();
}

init();

