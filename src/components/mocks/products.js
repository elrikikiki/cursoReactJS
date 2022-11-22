export const products = [ 
    {
        id:"1",
        title: "Cerveza Terra",
        price: 600,
        category: 'Golden',
        liters: '1ltro',
        stock: 10,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcEO3KShFCnzoinBrTX6QKLR-_geQuoJNeA&usqp=CAU'
    },
    {
        id:"2",
        title: "Cerveza Black",
        price: 750,
        category: 'Negra',
        liters: '1ltro',
        stock: 20,
        img: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LYPHS6JF65FQ7GTXETIGIT6OTE.jpg'
    },
    {
        id:"3",
        title: "Cerveza Temple",
        price: 600,
        category: 'Roja',
        liters: '1ltro',
        stock: 5,
        img: 'https://www.clarin.com/img/2022/03/09/la-cerveza-roja-tiene-un___K6mP1BcmN_2000x1500__1.jpg'
    },
    {
        id:"4",
        title: "Cerveza GoldenStar",
        price: 550,
        category: 'Golden',
        liters: '1ltro',
        stock: 10,
        img: 'https://www.cocinista.es/download/bancorecursos/recetas/receta-cerveza-rubia-belga.jpg'
    },
    {
        id:"5",
        title: "Cerveza RedBear",
        price: 800,
        category: 'Roja',
        liters: '1ltro',
        stock: 15,
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/831/262/products/frambuesa1-a062555e9a897131de15625942574414-640-0.jpg',
    }
    
];
export const getProducts = (categoryName) => {
    return new Promise ((res,rej) => {
        const productsFilters = products.filter((product) => product.category === categoryName);
        const reference = categoryName ? productsFilters : products; 
        setTimeout(() => {
            res(reference)
        }, 600);
    })
}
