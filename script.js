function filtersProducten(categorie) {
    const producten = document.querySelectorAll('.product-card');

    producten.forEach(function(product) {
        if (product.dataset.categorie === categorie || categorie === 'alles') {
            product.style.display = 'block';  
        } else {
            product.style.display = 'none';
        } 
        
    });
}

function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let index = cart.findIndex(item => item.name === productName);

    if (index >= 0) {
        cart[index].amount += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            amount: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert(productName + " has been added to your shopping cart!");
}