document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    const buyNowButtonContainer = document.getElementById('buy-now-button-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-center text-gray-500">Your cart is currently empty.</p>';
            if (cartTotalContainer) cartTotalContainer.innerHTML = '';
            if (buyNowButtonContainer) buyNowButtonContainer.innerHTML = '';
            return;
        }

        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'flex items-center justify-between p-4 bg-white rounded-lg shadow-md';
            itemElement.innerHTML = `
                <div class="flex items-center space-x-4">
                    <img src="${item.image}" alt="${item.name}" class="w-20 h-20 rounded-lg object-cover">
                    <div>
                        <h2 class="text-lg font-semibold text-gray-800">${item.name}</h2>
                        <p class="text-gray-600">$${item.price.toFixed(2)}</p>
                    </div>
                </div>
                <button class="text-red-500 hover:text-red-700 remove-from-cart" data-id="${item.id}">&times; Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price;
        });

        if (cartTotalContainer) {
            cartTotalContainer.innerHTML = `
                <div class="text-right text-2xl font-bold text-gray-800">
                    Total: $${total.toFixed(2)}
                </div>
            `;
        }

        if (buyNowButtonContainer) {
            buyNowButtonContainer.innerHTML = '<a href="/checkout.html" class="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition-all">Buy Now</a>';
        }
        
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.target.getAttribute('data-id');
                const itemIndex = cart.findIndex(cartItem => cartItem.id === itemId);
                if (itemIndex > -1) {
                    cart.splice(itemIndex, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCart();
                }
            });
        });
    }

    window.addToCart = (product) => {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} has been added to your cart!`);
    };

    if (cartItemsContainer) {
        updateCart();
    }
});
