// 商品數據
const mockData = [
    { id: 5, name: "蜥蜴的尾巴", enName: "Lizard Tail", price: 50, stock: 30, image: "../assets/img/products/good5.png", description: "最基本的耗材，便宜而且泛用。", ingredients: ["新鮮蜥蜴尾巴", "濕地苔蘚", "魔法鹽晶"] },
    { id: 6, name: "魔力粉", enName: "Magic Powder", price: 250, stock: 25, image: "../assets/img/products/good6.png", description: "魔法藥水的催化劑，製作魔法藥水。", ingredients: ["星塵碎片", "彩虹石粉末", "龍骨屑"] },
    { id: 7, name: "兔子的腳", enName: "Rabbit Foot", price: 600, stock: 18, image: "../assets/img/products/good7.png", description: "幸運的象徵，可以當作吊飾，也能增加製作魔法藥水的成功機率。", ingredients: ["兔子後腳", "四葉草精華", "月光粉"] },
    { id: 8, name: "鳳凰羽毛", enName: "Phoenix Feather", price: 300000, stock: 2, image: "../assets/img/products/good8.png", description: "用於製作再生或治療功能的藥水，稀有而且非常好看。", ingredients: ["鳳凰尾羽", "光之露珠", "永生之花的花瓣"] },
    { id: 9, name: "古代恐龍的化石", enName: "Ancient Dinosaur Fossil", price: 2500000, stock: 1, image: "../assets/img/products/good9.png", description: "用於製作提升力量的藥水，買一根擺在客廳會非常帥氣。", ingredients: ["恐龍化石碎片", "強力魔法樹脂", "地底熔岩石"] },
    { id: 10, name: "曼德拉草", enName: "Mandrake Root", price: 2290, stock: 5, image: "../assets/img/products/good10.png", description: "用於製作解咒藥水，收到包裹時請戴上耳塞處理。", ingredients: ["曼德拉草根", "黑暗泥土", "靜音草籽"] },
    { id: 11, name: "靈光藍花", enName: "Soul Glow Blueflower", price: 3520, stock: 7, image: "../assets/img/products/good11.png", description: "祭祀魔法的媒介，用以祭祀死去的人、撫慰他們的靈魂。", ingredients: ["靈光藍花花瓣", "星夜之水", "月亮石粉"] },
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
