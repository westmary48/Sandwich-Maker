import util from '../helpers/util.js';

 const makeStore = () => {
  let domString = '<h3>Bread</h3>';
  util.printToDom('bread-container', domString);

 };

 export default { makeStore }