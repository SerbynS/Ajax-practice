let productsGrid = document.getElementById("products-grid");
let productsArray = [];
let url = "https://serbyn-29bb.restdb.io/rest/products";
let xhr = new XMLHttpRequest();

xhr.open("GET", url);

xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-apikey", "6468f27d0b60fc42f4e1984c");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.responseType = 'json';

xhr.onload = function(){
    let products = xhr.response;
    console.log(products);
    productsGrid.innerHTML = null;
    products.forEach(p => {
        productsArray.push(p);
        let pElem = document.createElement("div");
        pElem.classList.add("product");
        pElem.innerHTML = `
            <h2 class="product-name">${p.name}</h2>
            <img class="product-photo" src="${p.photo_url}">
            <p class="product-price">${p.price}</p>
            <p class="product-description">${p.description}</p>
            <a href="userProfile.html?id=${p.author_id}">Seller profile</a>
            <button onclick="addProductToCart('${p._id}')">Buy</button>
            
        `;
        productsGrid.appendChild(pElem);
    });



}

xhr.send();

let cartProd = document.getElementById("cart-products");

function openCart(){
    cartProd.classList.toggle('hide');
}

let cart = [];
if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    drawCartProducts();
}
function addProductToCart(id){
    let product = productsArray.find(function(p){
        return p._id == id;
    });
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    drawCartProducts();
}

function drawCartProducts(){
    if(cart.length === 0) 
    return cartProd.innerHTML = 'Cart is empty';

    cartProd.innerHTML = null;

    let sum = 0;

    cart.forEach(function(p){
        cartProd.innerHTML += `
            <p> <img src="${p.photo_url}"> ${p.name} |${p.price} </p>
            <hr>
        `;
        sum += p.price;

    });

    cartProd.innerHTML += `
        <p>Total Price: ${sum}</p>
        <button onclick="buyAll()">Buy All</button>
    `;
}

function buyAll(){
    cart = [];
    cartProd.innerHTML = "Money was withdraw from your credit card";
    localStorage.setItem("cart", '[]');
}



