function query(url, method = "GET", data = []) {
    let query;
    switch (method) {
        case 'GET':
        default:
            query = fetch(url);
        break;

        case 'POST':
            query = fetc(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
        break;
    }

    return query.then(result => result.json());
}

const categories = query('https://638a1873c5356b25a2120a7c.mockapi.io/api/v1/categori/1/phone_products').then(json => {
    console.log(json)
});

// let strGet = window.location.search.replace('?', '')
//     .split('&')
//     .reduce(
//         function(p,e){
//             var a = e.split('=');
//             p[ decodeURIComponent(a[0])] = decodeURIComponent(a[0]);
//         },
//         {}
//     );

// const categories = query('https://638a1873c5356b25a2120a7c.mockapi.io/api/v1/categori/${strGET.categori}/phone_products').then(json => {
//     let div__products = document.querySelector('.products');
//     json.forEach(element => {
//         let item = document.createElement('div');
//         item.classList.add('item');
//         item.innerHTML = '
//             <div>
//                 <div class= "item-tittle">${element.tittle}</div>
//                 <div class= "item-image">
//                     <img src= "${element.image}" alt="">
//                 </div>
//                 <div class= "property">
//                     <div>Категория:</div>
//                     <div>${element.categoty}</div>
//                     <div>Рейтинг:</div>
//                     <div>${element.rating}</div>
//                 </div>
//                 <div class= "item-price"><span id= "price">${element.price}</span>$</div>
//             </div>
//         ';
//         div__products.append(item)
//     });
// });

// const categori = query('https://638a1873c5356b25a2120a7c.mockapi.io/api/v1/categori/1/phone_products').then (json =>{
//     let div_categori = document.querySelector('categori');
//     json.forEach(element => {
//         let category = document.createElement('div')
//         category.classList.add('category');
//         category.innerHTML = '<a href="phone.html?category=${elemant.id}">${element.name}></a>'
//         div_categori.append(category);
//     });
// });









