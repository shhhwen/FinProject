document.addEventListener('DOMContentLoaded', () => {
    const mockData = [
        { id: 1, name: "商品1", price: 200, image: "../assets/img/test-can delete.jpg" },
        { id: 2, name: "商品2", price: 250, image: "../assets/img/test-can delete.jpg" },
        { id: 3, name: "商品3", price: 300, image: "../assets/img/test-can delete.jpg" },
        { id: 4, name: "商品4", price: 350, image: "../assets/img/test-can delete.jpg" },
        { id: 5, name: "商品5", price: 400, image: "../assets/img/test-can delete.jpg" },
    ];

    let products = mockData; // 初始化產品資料
    let cart = [];

    const iconCart = document.querySelector('.icon-cart');
    const body = document.querySelector('body');
    const closeCart = document.querySelector('.close');
    const listProductHTML = document.querySelector('.listProduct');
    const listCartHTML = document.querySelector('.listCart');
    const iconCartSpan = document.querySelector('.icon-cart span');

    iconCart.addEventListener('click', () => {
        body.classList.toggle('showCart');
    });

    closeCart.addEventListener('click', () => {
        body.classList.toggle('showCart');
    });

    const addDataToHTML = () => {
        listProductHTML.innerHTML = '';
        if (products.length > 0) {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = `
                    <img src="${product.image}" alt="">
                    <h2>${product.name}</h2>
                    <div class="price">$${product.price}</div>
                    <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    };

    listProductHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if (positionClick.classList.contains('addCart')) {
            let id_product = positionClick.parentElement.dataset.id;
            addToCart(id_product);
        }
    });

    const addToCart = (product_id) => {
        let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
        if (cart.length <= 0) {
            cart = [{ product_id: product_id, quantity: 1 }];
        } else if (positionThisProductInCart < 0) {
            cart.push({ product_id: product_id, quantity: 1 });
        } else {
            cart[positionThisProductInCart].quantity += 1;
        }
        addCartToHTML();
        addCartToMemory();
    };

    const addCartToMemory = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const addCartToHTML = () => {
        listCartHTML.innerHTML = '';
        let totalQuantity = 0;
        if (cart.length > 0) {
            cart.forEach(item => {
                totalQuantity += item.quantity;
                let newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.dataset.id = item.product_id;

                let positionProduct = products.findIndex((value) => value.id == item.product_id);
                let info = products[positionProduct];
                newItem.innerHTML = `
                    <div class="image">
                        <img src="${info.image}">
                    </div>
                    <div class="name">${info.name}</div>
                    <div class="totalPrice">$${info.price * item.quantity}</div>
                    <div class="quantity">
                        <span class="minus"><</span>
                        <span>${item.quantity}</span>
                        <span class="plus">></span>
                    </div>`;
                listCartHTML.appendChild(newItem);
            });
        }
        iconCartSpan.innerText = totalQuantity;
    };

    listCartHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
            let product_id = positionClick.parentElement.parentElement.dataset.id;
            let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
            changeQuantityCart(product_id, type);
        }
    });

    const changeQuantityCart = (product_id, type) => {
        let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
        if (positionItemInCart >= 0) {
            switch (type) {
                case 'plus':
                    cart[positionItemInCart].quantity += 1;
                    break;
                default:
                    cart[positionItemInCart].quantity -= 1;
                    if (cart[positionItemInCart].quantity <= 0) {
                        cart.splice(positionItemInCart, 1);
                    }
                    break;
            }
        }
        addCartToHTML();
        addCartToMemory();
    };

    const initApp = () => {
        addDataToHTML();
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    };

    initApp();
});
