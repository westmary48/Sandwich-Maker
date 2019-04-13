import bread from '../helpers/bread.js';
import util from '../helpers/util.js';

const addToCartEvent = (e) => {
    e.preventDefault();
    const breadInfo = bread.getBread();
    console.log(breadInfo);

  }

 const makeStore = (e) => {
    //  const button = e.target.id
    const breadInfo = bread.getBread();
    let domString = '<h2>Bread</h2>';
//     if (button === 'whiteBtn') {
//         console.log('clicked on white');
//         // addToCartEvent();
//     } else if (button === 'wheatBtn') {
//         console.log('clicked on wheat');
//         // addToCartEvent();
//     } else if (button === 'whiteBtn'){
//         console.log('clicked on white');
//         // addToCartEvent();
//     } else if  (button === 'pitBtn') {
//         console.log('clicked on pita');
//         // addToCartEvent();
// }
    breadInfo.forEach((bread) => {
    domString += `<h3>${bread.name}</h3>`
    domString += `<h3> $ ${bread.price} </h3>`
    domString += `<img class = "breadImg" src = "${bread.imageUrl}">`
    domString += `<button id = "breadInfo.id" class = "btn btn-danger ${bread.id} ">Add Asiago</button>`
    domString += `</div>`
    util.printToDom('bread-container', domString);
    document.getElementById(`${bread.id}`).addEventListener('click', addToCartEvent);

    })

 };

 export default { makeStore }


