import bread from '../helpers/bread.js';
import util from '../helpers/util.js';


 const makeStore = () => {
    const breadInfo = bread.getBread();
    let domString = '<h2>Bread</h2>';
    domString += `<h3>${breadInfo.asiago.name}</h3>`
    domString += `<h3>${breadInfo.asiago.price}</h3>`
    domString += `<button class = "btn btn-danger ${breadInfo.asiago.breadClassBtn} ">Add Asiago</button>`
    domString += `<h3>${breadInfo.wheat.name}</h3>`
    domString += `<h3>${breadInfo.wheat.price}`
    domString += `<button class = "btn btn-danger ${breadInfo.wheat.breadClassBtn} ">Add Wheat</button>`
    domString += `<h3>${breadInfo.white.name}</h3>`
    domString += `<h3>${breadInfo.white.price}</h3>`
    domString += `<button class = "btn btn-danger ${breadInfo.white.breadClassBtn} ">Add White</button>`
    domString += `<h3>${breadInfo.pita.name}</h3>`
    domString += `<h3>${breadInfo.pita.price}</h3>`
    domString += `<button class = "btn btn-danger ${breadInfo.pita.breadClassBtn} ">Add Pita</button>`
    domString += `</div>`

    util.printToDom('bread-container', domString);

 };

 export default { makeStore }


