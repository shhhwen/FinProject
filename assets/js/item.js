document.addEventListener('DOMContentLoaded', () => {
    // 獲取商品 ID
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // 查找商品
    const product = mockData.find(item => item.id === productId);

    if (product) {
        // 更新商品信息
        document.querySelector('.introduce .image img').src = product.image;
        document.querySelector('.titpro .title_a').innerHTML = `${product.enName}<br>${product.name}`;
        document.querySelector('.titpro .proprice').innerText = `NT$${product.price}`;
        document.querySelector('.title .title_c').innerText = `庫存：${product.stock}`;
        document.querySelector('.description').innerText = product.description;
        document.querySelector('.ingredients').innerHTML = product.ingredients.map(i => `${i}<br>`).join('');
    } else {
        // 商品未找到
        document.querySelector('main').innerHTML = `<p>商品未找到</p>`;
    }

    // 綁定加減按鈕事件
    const minusButton = document.querySelector('.btn.minus');
    const plusButton = document.querySelector('.btn.plus');
    const quantityInput = document.querySelector('.input_num');
    const addCartButton = document.querySelector('.button_shop.addCart');
    const buyNowButton = document.querySelector('.button_shop.buyNow');

    // 數量加減按鈕
    minusButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    plusButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue < 100) {
            quantityInput.value = currentValue + 1;
        }
    });

    // 加入購物車按鈕
    addCartButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue < 100) {
            quantityInput.value = currentValue + 1;
        }
        alert("已加入購物車！");
    });

    // 立即購買按鈕
    buyNowButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue < 100) {
            quantityInput.value = currentValue + 1;
        }
        alert("即將跳轉至結帳頁面！");
        window.location.href = "../pages/checkout.html"; // 跳轉到結帳頁面
    });
});
