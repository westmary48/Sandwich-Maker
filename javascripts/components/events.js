import breadInfo from './bread';
import meatInfo from './meats';
import cheeseInfo from './cheese';
import veggieInfo from './veggies';
import condimentInfo from './condiments';


const addBreadIngredient = (e) => {
  breadInfo.addBread(e.target.id);
};

const addMeatIngredient = (e) => {
  meatInfo.addMeat(e.target.id);
};

const addCheeseIngredient = (e) => {
  cheeseInfo.addCheese(e.target.id);
};

const addVeggieIngredient = (e) => {
  veggieInfo.addVeggie(e.target.id);
};

const addCondimentIngredient = (e) => {
  condimentInfo.addCondiment(e.target.id);
};

const breadButtons = () => {
    document.getElementById('asiago').addEventListener('click', addBreadIngredient);
    document.getElementById('wheat').addEventListener('click', store.addToCartEvent);
    document.getElementById('white').addEventListener('click', store.addToCartEvent);
    document.getElementById('pita').addEventListener('click', store.addToCartEvent);
}
const meatButtons = () => {
  document.getElementById('turkey').addEventListener('click', addMeatIngredient);
  document.getElementById('ham').addEventListener('click', addMeatIngredient);
  document.getElementById('chicken').addEventListener('click', addMeatIngredient);
  document.getElementById('tofu').addEventListener('click', addMeatIngredient);
}

const veggieButtons = () => {
  document.getElementById('lettuce').addEventListener('click', addVeggieIngredient);
  document.getElementById('onion').addEventListener('click', addVeggieIngredient);
  document.getElementById('tomato').addEventListener('click', addVeggieIngredient);
  document.getElementById('peppers').addEventListener('click', addVeggieIngredient);
}

const condimentButtons = () => {
  document.getElementById('mayo').addEventListener('click', addCondimentIngredient);
  document.getElementById('ranch').addEventListener('click', addCondimentIngredient);
  document.getElementById('bbq').addEventListener('click', addCondimentIngredient);
  document.getElementById('mustard').addEventListener('click', addCondimentIngredient);
}

const cheeseButtons = () => {
  document.getElementById('cheddar').addEventListener('click', addCheeseIngredient);
  document.getElementById('gouda').addEventListener('click', addCheeseIngredient);
  document.getElementById('american').addEventListener('click', addCheeseIngredient);
  document.getElementById('swiss').addEventListener('click', addCheeseIngredient);
}



export default { breadButtons, cheeseButtons, meatButtons,condimentButtons, veggieButtons }
