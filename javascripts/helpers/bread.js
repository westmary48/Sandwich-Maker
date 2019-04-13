const breadInfo = {
    asiago: {
        name : 'asiago',
        price:1.00,
        btnClassName: 'asiagoBtn',
        imageUrl: ''
    },
    white : {
        name : 'white',
        price: 1.35,
        btnClassName: 'whiteBtn',
        imageUrl: ''
    },
    wheat : {
        name: 'wheat',
        price: 1.50,
        btnClassName: 'wheatBtn',
        imageUrl: ''
    },
    pita : {
        name: 'pita',
        price: 1.60,
        btnClassName: 'pitBtn',
        imageUrl: ''
    }
}

 const getBread = () => {
return breadInfo;
}

 export default { getBread };