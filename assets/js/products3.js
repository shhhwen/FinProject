// 商品數據
const mockData = [
    { id: 12, name: "魔法掃帚", enName: "Magic Broomstick", price: 12900, stock: 4, image: "../assets/img/products/good12.png", description: "就是可以飛的掃把。", ingredients: ["魔法木材", "鳳凰尾羽", "強化魔法結界符文"] },
    { id: 13, name: "包你醒腦萬靈丹", enName: "Brain Awakening Elixir", price: 990, stock: 20, image: "../assets/img/products/good13.png", description: "可明顯增強服用者腦力的魔藥，在腦子不清楚時可以很好的幫助你清醒。", ingredients: ["善智菇", "金牛乳", "銀光粉"] },
    { id: 14, name: "隱形斗篷", enName: "Invisibility Cloak", price: 8900, stock: 3, image: "../assets/img/products/good14.png", description: "隱蔽你的所有蹤跡。", ingredients: ["巨蛛絲", "光影隱形符文", "夜影布"] },
    { id: 15, name: "記憶吐司", enName: "Memory Toast", price: 790, stock: 15, image: "../assets/img/products/good15.png", description: "將想記住的事寫上去後再吃掉就會一直記得，直到排泄出來。", ingredients: ["忘憂草籽粉", "書頁碎片", "符咒墨水"] },
    { id: 16, name: "使魔的蛋", enName: "Familiar's Egg", price: 99999, stock: 2, image: "../assets/img/products/good16.png", description: "根據照顧者的性格及照顧方式，會孵出屬於照顧者獨一無二的使魔。", ingredients: ["幻獸精華", "魔法火焰孵育晶石", "時間之沙"] }
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
