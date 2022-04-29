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

        const elContainer = document.createElement('div');
        elContainer.className = 'pickedContainer';
        parent.append(elContainer);

        const elPickedIllu = document.createElement('img');
        elPickedIllu.src = `img/${product.img}`;
        elPickedIllu.className = 'pickedIllu';
        elContainer.append(elPickedIllu);

        const elPickedCharm = document.createElement('div');
        elPickedCharm.className = 'cartPiece';
        elContainer.append(elPickedCharm);

        const elPickedBez = document.createElement('h2');
        elPickedBez.innerHTML = product.name;
        elPickedCharm.append(elPickedBez);

        const elUnit = document.createElement('div');
        elUnit.innerHTML = `Units: ${amount}`;
        elPickedCharm.append(elUnit);

        const elEinzelPreis = document.createElement('div');
        elEinzelPreis.className = 'einzelPreis';
        elEinzelPreis.innerHTML = `Price per unit: ${product.price} Euro`;
        elPickedCharm.append(elEinzelPreis);

        const elSubtotal = document.createElement('div');
        elSubtotal.className = 'subtotal';
        elSubtotal.innerHTML = `${product.price * amount} Euro`;
        elPickedCharm.append(elSubtotal);

        const elKillBtn = document.createElement('button');
        elKillBtn.className = 'killBtn';
        elKillBtn.innerHTML = 'Delete';
        elPickedCharm.append(elKillBtn);
        elKillBtn.addEventListener('click', () => killMe(product.id));

        const elChangeInput = document.createElement('input');
        elChangeInput.className = 'changeInput';
        elChangeInput.type = 'number';
        elPickedCharm.append(elChangeInput);
        elChangeInput.value = amount;
        elChangeInput.addEventListener('change', () => changeUnit(product.id, elChangeInput.value));

    },

    total(parent) {
        //console.log(warenkorb);
        let cartSum = 0, totalItems = 0;
        for (let key in warenkorb) {
            const product = products.find(product => product.id == key);
            cartSum += product.price * warenkorb[key];
            totalItems += Number(warenkorb[key]);
        }

        const elTotal = document.createElement('div');
        elTotal.className = 'totalContainer';
        parent.append(elTotal);

        let elTotalItems = document.createElement('p');
        elTotalItems.className = 'total';
        elTotalItems.innerHTML = `Total Items: ${totalItems}`;
        elTotal.append(elTotalItems);

        let elCartSum = document.createElement('p');
        elCartSum.className = 'cartSum';
        elCartSum.innerHTML = 'IN TOTAL' + '<br>' + `${cartSum} Euro`;
        elTotal.append(elCartSum);

    },


}

