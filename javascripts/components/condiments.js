import cart from './cart.js';

const condimentInfo = {

    mayo : 1.55,
    ranch: 1.34,
    bbq: 1.53,
    mustard: 1.65,
}
const getCondiments = () => {
return condimentInfo;
}

const addCondiment = (ingredient) => {
    const ingredientAdded = {
        name: ingredient,
        price: condimentInfo[ingredient],
        type: 'Condiment'
    };

    cart.setCart(ingredientAdded);
}


export default { getCondiments, addCondiment };