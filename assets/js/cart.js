// 初始化購物車數據
let cart = [];

// 選取 DOM 元素
const iconCart = document.querySelector('.icon-cart'); // 購物車圖標
const body = document.querySelector('body'); // 用於切換購物車顯示狀態的 <body>
const closeCart = document.querySelector('.close'); // 關閉購物車按鈕
const listCartHTML = document.querySelector('.listCart'); // 購物車列表
const iconCartSpan = document.querySelector('.icon-cart span'); // 購物車商品數量顯示

// 點擊購物車圖標切換顯示狀態
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

// 點擊關閉按鈕隱藏購物車
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

// 將商品添加到購物車
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

// 保存購物車數據到 LocalStorage
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// 渲染購物車內容
const addCartToHTML = () => {
    listCartHTML.innerHTML = ''; // 清空購物車列表
    let totalQuantity = 0; // 初始化總數量
    if (cart.length > 0) {
        cart.forEach(item => {
            totalQuantity += item.quantity; // 累加商品數量
            let newItem = document.createElement('div');
            newItem.classList.add('item'); // 添加樣式類
            newItem.dataset.id = item.product_id; // 設置數據屬性

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            newItem.innerHTML = `
                <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">${info.name}</div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus">❮</span>
                    <span>${item.quantity}</span>
                    <span class="plus">❯</span>
                </div>`;
            listCartHTML.appendChild(newItem); // 添加到購物車列表
        });
    }
    iconCartSpan.innerText = totalQuantity; // 更新購物車圖標的數量顯示
};

// 修改購物車商品數量
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
                    cart.splice(positionItemInCart, 1); // 刪除數量為 0 的商品
                }
                break;
        }
    }
    addCartToHTML(); // 更新購物車顯示
    addCartToMemory(); // 保存數據
};

// 初始化購物車
const initCart = () => {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart')); // 從 LocalStorage 加載數據
        addCartToHTML(); // 渲染購物車內容
    }
};

initCart(); // 初始化購物車邏輯
