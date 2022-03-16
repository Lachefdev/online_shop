'use strict';

const components = {
    piece(data, parent) {

        const elCharm = document.createElement('div');
        elCharm.className = 'column';
        parent.append(elCharm);

        let elCharmIllu = document.createElement('img');
        elCharmIllu.src = `img/${data.img}`;
        elCharmIllu.className = 'charmIllu';
        elCharm.append(elCharmIllu);

        let elBez = document.createElement('h2');
        elBez.innerHTML = data.name;
        elCharm.append(elBez);

        let elDes = document.createElement('p');
        elDes.className = 'description';
        elDes.innerHTML = data.description;
        elCharm.append(elDes);

        let elPrice = document.createElement('div');
        elPrice.className = 'price';
        elPrice.innerHTML = `${data.price} Euro`;
        elCharm.append(elPrice);

        let elKaufBtn = document.createElement('button');
        elKaufBtn.className = 'kaufenBtn'
        elKaufBtn.innerHTML = 'Add to basket';
        elKaufBtn.addEventListener('click', () => addToBasket(data));
        elCharm.append(elKaufBtn);

    },

    bagPiece(id, amount, parent) {

        const product = products.find(product => product.id == id);

        const elPickedCharm = document.createElement('div');
        elPickedCharm.className = 'cartPiece';
        parent.append(elPickedCharm);

        const elPickedIllu = document.createElement('img');
        elPickedIllu.src = `img/${product.img}`;
        elPickedIllu.className = 'pickedIllu';
        elPickedCharm.append(elPickedIllu);

        const elPickedBez = document.createElement('h2');
        elPickedBez.innerHTML = product.name;
        elPickedCharm.append(elPickedBez);

        const elUnit = document.createElement('div');
        elUnit.innerHTML = amount;
        elPickedCharm.append(elUnit);

        const elEinzelPreis = document.createElement('div');
        elEinzelPreis.className = 'einzelPreis';
        elEinzelPreis.innerHTML = `Price per Unit: ${product.price} Euro`;
        elPickedCharm.append(elEinzelPreis);

        const elSubtotal = document.createElement('div');
        elSubtotal.className = 'total';
        elSubtotal.innerHTML = product.price * amount;
        elPickedCharm.append(elSubtotal);

    },



}