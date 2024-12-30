// 商品數據
const mockData = [
    { id: 12, name: "魔法掃帚", price: 12900, image: "../assets/img/products/good12.png" },
    { id: 13, name: "包你醒腦萬靈丹", price: 990, image: "../assets/img/products/good13.png" },
    { id: 14, name: "隱形斗篷", price: 8900, image: "../assets/img/products/good14.png" },
    { id: 15, name: "記憶吐司(兩片裝)", price: 790, image: "../assets/img/products/good15.png" },
    { id: 16, name: "使魔的蛋", price: 99999, image: "../assets/img/products/good16.png" },
];

// 初始化商品數據
let products = mockData;

// 選取 DOM 元素
const listProductHTML = document.querySelector('.listProduct');

// 渲染商品到頁面
const addDataToHTML = () => {
    listProductHTML.innerHTML = ''; // 清空商品列表
    if (products.length > 0) {
        products.forEach(product => {
            let newProduct = document.createElement('div'); // 創建商品容器
            newProduct.dataset.id = product.id; // 設置商品 ID
            newProduct.classList.add('item'); // 添加樣式類
            
            // 定義商品內容
            newProduct.innerHTML = `
                <a href="../pages/item.html">
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <div class="price">$${product.price}</div>
                    <button class="addCart">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        加入購物車
                    </button>
                </a>
            `;
            
            listProductHTML.appendChild(newProduct); // 添加到商品列表
        });
    }
};


// 綁定 "加入購物車" 事件
listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let id_product = positionClick.parentElement.dataset.id; // 獲取商品 ID
        addToCart(id_product); // 調用購物車的邏輯
    }
});

// 初始化商品列表
addDataToHTML();
