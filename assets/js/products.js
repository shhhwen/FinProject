// 商品數據（可以模擬或者從 API 獲取）
const mockData = [
    { id: 1, name: "豹肝藥", price: 1500, image: "../assets/img/products/good1.png" },
    { id: 2, name: "打嗝藥水", price: 450, image: "../assets/img/products/good2.png" },
    { id: 3, name: "體溫調節藥水", price: 2150, image: "../assets/img/products/good3.png" },
    { id: 4, name: "遺忘汁", price: 1450, image: "../assets/img/products/good4.png" },
    { id: 5, name: "蜥蜴尾巴", price: 50, image: "../assets/img/products/good5.png" },
    { id: 6, name: "魔力粉", price: 250, image: "../assets/img/products/good6.png" },
    { id: 7, name: "兔子的腳", price: 600, image: "../assets/img/products/good7.png" },
    { id: 8, name: "鳳凰羽毛", price: 300000, image: "../assets/img/products/good8.png" },
    { id: 9, name: "古代恐龍的化石", price: 2500000, image: "../assets/img/products/good9.png" },
    { id: 10, name: "靈光藍花", price: 3520, image: "../assets/img/products/good10.png" },
    { id: 11, name: "魔法掃帚", price: 12900, image: "../assets/img/products/good11.png" },
    { id: 12, name: "包你醒腦萬靈丹", price: 990, image: "../assets/img/products/good12.png" },
    { id: 13, name: "記憶吐司(兩片裝)", price: 7900, image: "../assets/img/products/good13.png" },
    { id: 14, name: "使魔的蛋", price: 99999, image: "../assets/img/products/good14.png" },
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
