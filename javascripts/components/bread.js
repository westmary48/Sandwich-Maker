import cart from './cart.js';

const breadInfo = {

        asiago : 1.55,
        white: 1.34,
        wheat: 1.53,
        pita: 1.65,
}

const getBread = () => {
return breadInfo;
}

const addBread = (ingredient) => {
        const ingredientAdded = {
            name: ingredient,
            price: breadInfo[ingredient],
            type: 'Bread'
        };

        cart.setCart(ingredientAdded);
    }

 export default { addBread, getBread };

