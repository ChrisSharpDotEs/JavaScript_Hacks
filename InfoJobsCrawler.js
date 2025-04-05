/*Copia y pega este código en tu consola y obtendrás la lista de aplicaciones en infojobs extrayendo la información relevante*/
[...document.querySelectorAll('li')].filter(item => item.getAttribute('id')).map(item => {
    return {
        "Puesto": item.querySelector('h2 span').innerHTML,
        "Empresa": item.querySelector('h3 span span').innerHTML,
        "Fecha": item.querySelector('ul .iconfont-Clock')?.innerHTML,
        "Estado": item.querySelector('ul .iconfont-Check')?.innerHTML ?? item.querySelector('ul .iconfont-Close')?.innerHTML ?? item.querySelector('ul .iconfont-Viewdetails')?.innerHTML
    }
});
