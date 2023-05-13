let profile = document.getElementById("profile");

let url = "https://my-json-server.typicode.com/SerbynS/Ajax-practice";
let xhr = new XMLHttpRequest();

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

xhr.open("GET", `${url}/users/${id}`);

xhr.responseType = 'json';

xhr.onload = function(){
    let user = xhr.response;
    profile.innerHTML = `
        <h1>${user.name}</h1>
        <h2>${user.sirname}</h2>
        <img class="profile-img" src="${user.photo_url}">
        <p>${user.balance}</p>
    `;
}

xhr.send();