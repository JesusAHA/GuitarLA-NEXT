import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito]= useState([])
   //verifica si tiene algo el localStorage y se lo guarda en carrito
  useEffect(() => {
   const carritoLS = JSON.parse(localStorage.getItem('carrito'))?? [];
   setCarrito(carritoLS)
  }, [])
   

   //sincornizar y actualizar carrito
   useEffect(() => {
     localStorage.setItem('carrito', JSON.stringify(carrito))

   }, [carrito])
   

  const agregarCarrito =(producto)=>{
    // saber si en el carrito ahi articulos duplicados
    if (carrito.some( articulo => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map((articulo)=>{
        if (articulo.id === producto.id) {
           articulo.cantidad = producto.cantidad //+ articulo.cantidad
        }
        return articulo
      })
      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito,producto]) 
    }
  }
const actualizarCantidad = producto =>{
  const carritoActualizado = carrito.map((articulo)=>{
    if (articulo.id === producto.id) {
       articulo.cantidad = producto.cantidad //+ articulo.cantidad
    }
    return articulo
  })   
  setCarrito(carritoActualizado)
}
  const eliminarProducto =(id) =>{
    // filter para sacar un elemento
    const carritoActualizado= carrito.filter(articulo => articulo.id !== id)
    setCarrito(carritoActualizado);
  }

  return <Component 
                  {...pageProps} 
                   carrito={carrito}
                   agregarCarrito={agregarCarrito}
                   actualizarCantidad={actualizarCantidad}
                   eliminarProducto={eliminarProducto} />
}

export default MyApp
