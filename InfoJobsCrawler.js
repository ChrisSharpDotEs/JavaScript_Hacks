/**
* Copia y pega este código en tu consola y obtendrás la lista de inscripciones en ofertas a las 
* que te has inscrito en infojobs extrayendo la información relevante como:
* Nombre de la empresa, Nombre del puesto, fecha en la que te inscribiste y el estado
*/
[...document.querySelectorAll('li')].filter(item => item.getAttribute('id')).map(item => {
    return {
        "Puesto": item.querySelector('h2 span').innerHTML,
        "Empresa": item.querySelector('h3 span span').innerHTML,
        "Fecha": item.querySelector('ul .iconfont-Clock')?.innerHTML,
        "Estado": item.querySelector('ul .iconfont-Check')?.innerHTML ?? item.querySelector('ul .iconfont-Close')?.innerHTML ?? item.querySelector('ul .iconfont-Viewdetails')?.innerHTML
    }
});
