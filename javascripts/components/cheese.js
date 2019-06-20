import cart from './cart.js';

const cheeseInfo = {

    cheddar : 1.55,
    gouda: 1.34,
    american: 1.53,
    swiss: 1.65,
}
const getCheese = () => {
return cheeseInfo;
}

const addCheese = (ingredient) => {
    const ingredientAdded = {
        name: ingredient,
        price: cheeseInfo[ingredient],
        type: 'Cheese'
    };

    cart.setCart(ingredientAdded);
}


export default { getCheese, addCheese };