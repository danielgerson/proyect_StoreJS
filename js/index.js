let cash = _cashier(db_cash);
let products = _products(db_products);

const getCash = () => {
    let cashText = document.getElementById('cash');
    cashText.innerHTML = `Capital: $ ${cash.getStored()}`;
}

const buildTable = () => {
    let table = document.getElementById("productTable");
    let lista = table.getElementsByTagName("tbody")[0];
    lista.innerHTML = '';

    products.getAllProducts.forEach((element) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${element.id}</th>
            <td> ${element.name}</td>
            <td> ${element.stored}</td>
            <td> ${element.price}</td>
            <td></td>
            <td></td>
        `;
        lista.appendChild(row);
    });
}

addEventListener('load', getCash);
addEventListener('load', buildTable);