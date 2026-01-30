const productosMando =[
    {id:1, nombre:"xbox", precio: 50,idTipoProducto:"xbox", stock:10,img:"https://i.etsystatic.com/26567664/c/2001/1590/0/230/il/b36aa4/3009816706/il_340x270.3009816706_9lrs.jpg" },
    {id:2, nombre:"ps4 y ps5", precio: 50, idTipoProducto:"ps4yps5",stock:10,img:"https://static.thenounproject.com/png/4239781-200.png" },
    {id:3, nombre:"pc", precio: 50, idTipoProducto:"pc",stock:10,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRfZRRqfJ1yiZJs2ExuDsJoYqXxk3q89RHow&s" }
]
 export const getProductos = (()=>
    {
        return new Promise((resolve)=>{
            setTimeout (()=>{
                resolve(productosMando)
            },200)
        }) 
    })




export const getUnProducto = (id=2)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            
            const producto = productosMando.find(item=>item.id === id)
            resolve(producto)
        },100)
    } )
}

export const getPorCategoria =(idTipoProducto)=>{

    return new Promise (resolve=>{
        setTimeout(()=>{
            const productos = productosMando.filter((item)=> item.idTipoProducto === idTipoProducto)
            resolve(productos)
        },200)

    })

}