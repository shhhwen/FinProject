// 商品數據（可以模擬或者從 API 獲取）
const mockData = [
    { id: 1, name: "商品1", price: 200, image: "../assets/img/products/good1.png" },
    { id: 2, name: "商品2", price: 250, image: "../assets/img/products/good2.png" },
    { id: 3, name: "商品3", price: 300, image: "../assets/img/products/good3.png" },
    { id: 4, name: "商品4", price: 350, image: "../assets/img/products/good4.png" },
    { id: 5, name: "商品5", price: 400, image: "../assets/img/products/good5.png" },
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
            newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">加入購物車</button>`;
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
