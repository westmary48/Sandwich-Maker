import events from './components/events/';
import cart from "./components/cart.js";

const init = () => {
events.breadButtons();
events.meatButtons();
events.veggieButtons();
events.condimentButtons();
events.cheeseButtons();
document.getElementById('checkout').addEventListener('click', cart.cartToDom);
}

init();