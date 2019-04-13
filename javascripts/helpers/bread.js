const breadInfo = {
    asiago: {
        name : 'asiago',
        price:1.00,
        btnClassName: 'asiagoBtn',
        imageUrl: 'http://2.bp.blogspot.com/-__wizv-i-z8/UO1r6gHgAZI/AAAAAAAAE-c/tpcPS3lS5lw/s1600/P1030975.JPG'
    },
    white : {
        name : 'white',
        price: 1.35,
        btnClassName: 'whiteBtn',
        imageUrl: 'https://media.npr.org/assets/img/2013/01/11/white-bread-9aca49dd298d29eba19afe086778b821bc7f90fd-s800-c85.jpg'
    },
    wheat : {
        name: 'wheat',
        price: 1.55,
        btnClassName: 'wheatBtn',
        imageUrl: 'https://d2gk7xgygi98cy.cloudfront.net/5997-3-large.jpg'
    },
    pita : {
        name: 'pita',
        price: 1.65,
        btnClassName: 'pitBtn',
        imageUrl: 'https://images.eatthismuch.com/site_media/img/4298_erin_m_f1c3d9fd-66ad-4fa8-aca8-aa5ae0777b1d.png'
    }
}

 const getBread = () => {
return breadInfo;
}

 export default { getBread };