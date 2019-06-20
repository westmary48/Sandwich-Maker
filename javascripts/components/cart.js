import util from '../helpers/util.js';

const cart = [];

const getCart = () => {
    return cart;
};

const setCart = (ingredientToAdd) => {
  cart.push(ingredientToAdd);
};

const cartToDom = () => {
const myCart = getCart();
const totalCost = myCart.reduce((a, b)=> {return a + b.price},0)
let domString = '<div>';
domString += '<h2>INGREDIENTS TO ADD:</h2>';
myCart.forEach((ingredient) => {
  domString += `<div class="card col-2">`;
  domString += `<h5 class="card-title">${ingredient.name}</h5>`;
  domString += `<div class = "type">${ingredient.type}</h5>`
  domString += `<p class="card-text">${ingredient.price}</p>`;
  domString += `  </div>`;
  domString += `</div>`;
});
domString += `<h3>Total = $${totalCost}</h3>`;
util.printToDom('cart-container', domString);
}


export default { setCart, cartToDom }
