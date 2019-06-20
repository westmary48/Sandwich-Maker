const veggieInfo = {

    lettuce : 1.55,
    onion: 1.34,
    tomato: 1.53,
    peppers: 1.65,
}
const getVeggies = () => {
return veggieInfo;
}


const addVeggies = (ingredient) => {
    const ingredientAdded = {
        name: ingredient,
        price: veggieInfo[ingredient],
        type: 'Veggies'
    };

    cart.setCart(ingredientAdded);
}
export default { getVeggies, addVeggies };