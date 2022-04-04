'use strict';

const parent = document.querySelector('#basket');

const loadCart = () => {

    let loadedData = localStorage.getItem('warenkorb');
    warenkorb = loadedData ? JSON.parse(loadedData) : {};
}

const renderCart = () => {

    for (let key in warenkorb) {
        components.bagPiece(key, warenkorb[key], parent);
    }
    components.total(parent);
}

const killMe = key => {
    warenkorb[key] = 0;
    delete warenkorb[key];
    localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
    updateCart()
}

const updateCart = () => {
    loadCart();
    parent.innerHTML = " ";
    renderCart();   
}


const init = () => {
    loadCart();
    renderCart();
}

init();
