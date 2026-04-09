const cart = JSON.parse(localStorage.getItem('cart')) || [];
const tableBody = document.querySelector('#cart-items');
const totalPriceElement = document.querySelector('#total-price');

let totalSum = 0;

cart.forEach(item => {
    let subtotal = item.price * item.amount;
    totalSum += subtotal;

    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.amount}</td>
        <td>€${item.price.toFixed(2)}</td>
        <td>€${subtotal.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
});

totalPriceElement.innerText = `Totaal: €${totalSum.toFixed(2)}`;