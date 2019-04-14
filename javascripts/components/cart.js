import util from '../helpers/util.js';


const cart = [];

const getCart = () => {
    return cart;
};

const setCart = (addToCart) => {
  cart.push(addToCart);
};

const buyEvent = (e) => {
    e.preventDefault();
    const myCart = getCart();
    // reduce takes array of something and returns a single value
    // a is 0
    //b is an object
    // every time it goes through the loop i want it to return a + price
    const total = myCart.reduce((a, b) => {return a + b.price}, 0);
    window.alert(`You owe ${total.toFixed(2)}`);
}

const cartToDom = () => {
const myCart = getCart();
let domString = '<div class="row">';
domString += '<h2>Cart:</h2>';
domString += '<button id="purchase-btn" class="btn btn-secondary">Purchase</button>'
domString += '</div><div class="row d-flex flex-wrap">';
myCart.forEach((ingredient) => {
  domString += `<div class="card col-2">`;
  domString += `    <h5 class="card-title">${ingredient.name}</h5>`;
  domString += `    <p class="card-text">${ingredient.price}</p>`;
  domString += `  </div>`;
  domString += `</div>`;
});
domString += `</div>`;
util.printToDom('cart-container', domString);
document.getElementById('purchase-btn').addEventListener('click', buyEvent)
}


export default { setCart, cartToDom }