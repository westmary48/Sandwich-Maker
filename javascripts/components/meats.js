import cart from './cart.js';

const meatInfo = {

    turkey : 1.55,
    ham: 1.34,
    chicken: 1.53,
    tofu: 1.65,
}
const getMeat = () => {
return meatInfo;
}

const addMeat = (ingredient) => {
    const ingredientToAdd = {
        name: ingredient,
        price: meatInfo[ingredient],
        type: 'Meat'
    };

    cart.setCart(ingredientToAdd);
}

export default { getMeat, addMeat };
