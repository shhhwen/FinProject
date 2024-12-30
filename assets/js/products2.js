// 商品數據
const mockData = [
    { id: 5, name: "蜥蜴尾巴", price: 50, image: "../assets/img/products/good5.png" },
    { id: 6, name: "魔力粉", price: 250, image: "../assets/img/products/good6.png" },
    { id: 7, name: "兔子的腳", price: 600, image: "../assets/img/products/good7.png" },
    { id: 8, name: "鳳凰羽毛", price: 300000, image: "../assets/img/products/good8.png" },
    { id: 9, name: "古代恐龍的化石", price: 2500000, image: "../assets/img/products/good9.png" },
    { id: 10, name: "曼德拉草", price: 2290, image: "../assets/img/products/good10.png" },
    { id: 11, name: "靈光藍花", price: 3520, image: "../assets/img/products/good11.png" },
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
