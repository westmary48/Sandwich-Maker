import bread from './bread.js'

breadIngredient = bread.getBread();



const addBread = () => {
    const breads = document.getElementById('breadIngredient');
    var checkbox = breads.querySelectorAll('input[type="checkbox"]');
    var breadType = [];
    for(var i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked){
            checked.push(checkbox[i].value)
        }
    }
    return breadType;
}