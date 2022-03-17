'use strict';

const loadCart = () => {

    let loadedData = localStorage.getItem('warenkorb');
    warenkorb = loadedData ? JSON.parse(loadedData) : {};
}

const renderCart = () => {
    loadCart();
    const parent = document.querySelector('#basket');
    for (let key in warenkorb) {
        components.bagPiece(key, warenkorb[key], parent);
    }
    components.total(parent);
}



const init = () => {
    loadCart();
    renderCart();
}

init();

