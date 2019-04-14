import bread from '../helpers/bread.js';
import util from '../helpers/util.js';

const addToCartEvent = (e) => {
    e.preventDefault();
    const breadInfo = bread.getBread();
    console.log(breadInfo);

  }

 const makeStore = () => {
    const breadInfo = bread.getBread();
    let domString = '<h2>Bread</h2>';
    domString += `<h3> $ ${breadInfo.asiago}</h3>`
    domString += `<h3> $ ${breadInfo.wheat} </h3>`
    domString += `<h3> $ ${breadInfo.white} </h3>`
    domString += `<h3> $ ${breadInfo.pita} </h3>`
    domString += `<button id = "cart-btn" class = "btn btn-danger ">Add To Cart</button>`
    domString += `</div>`

    util.printToDom('bread-container', domString);
    document.getElementById('cart-btn').addEventListener('click', addToCartEvent);

 };

 export default { makeStore, addToCartEvent }


