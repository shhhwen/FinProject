// 商品數據
const mockData = [
    { id: 1, name: "豹肝藥", enName: "Leopard Liver Potion", price: 1500, stock: 10, image: "../assets/img/products/good1.png", description: "當你需要熬夜工作時必備，喝完就會有精力更加努力工作!", ingredients: ["豹肝", "蜂蜜", "薰衣草精油"] },
    { id: 2, name: "打嗝藥水", enName: "Hiccup Potion", price: 450, stock: 15, image: "../assets/img/products/good2.png", description: "使服用者打嗝，整人必備!", ingredients: ["蟾蜍唾液", "發酵草莓汁", "閃光粉末"] },
    { id: 3, name: "體溫調節藥水", enName: "Temperature Adjustment Potion", price: 2150, stock: 8, image: "../assets/img/products/good3.png", description: "在炎熱或寒冷的天氣服用後可以改變身體溫度以保持平衡。", ingredients: ["冰晶龍的鱗片", "火焰花瓣", "魔力水"] },
    { id: 4, name: "遺忘汁", enName: "Forget Juice", price: 1450, stock: 12, image: "../assets/img/products/good4.png", description: "不小心看了什麼傷眼睛的東西就可以喝一口保護眼睛和腦袋。", ingredients: ["哥布林肝臟", "忘憂草", "妖精閃粉"] },
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
                <div class="product-image">
                    <a href="../pages/item.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}">
                    </a>
                </div>                    
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
    let target = event.target;

    // 點擊加入購物車按鈕
    if (target.classList.contains('addCart')) {
        let id_product = target.closest('.item').dataset.id; // 獲取商品 ID
        addToCart(id_product); // 呼叫購物車邏輯
        event.preventDefault(); // 防止預設行為（避免按鈕觸發鏈結行為）
    }
});

// 初始化商品列表
addDataToHTML();
