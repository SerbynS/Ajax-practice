let productsGrid = document.getElementById("products-grid");
let productsArray = [];
let url = "https://my-json-server.typicode.com/SerbynS/Ajax-practice";
let xhr = new XMLHttpRequest();

xhr.open("GET", url + "/products");

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
            <button>Buy</button>
            
        `;
        productsGrid.appendChild(pElem);
    });



}

xhr.send();