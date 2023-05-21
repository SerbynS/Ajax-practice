let productForm = document.getElementById("add_product_form");

productForm.addEventListener("submit", function(event){
    event.preventDefault();
    let data = JSON.stringify({
        "name": event.target['name'].value,
        "description": event.target['description'].value,
        "photo_url": event.target['photo_url'].value,
        "price": event.target['price'].value
    });
});