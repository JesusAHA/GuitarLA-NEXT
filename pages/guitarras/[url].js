import { useState } from "react"
import Image from "next/image"
import Layout from "../../components/Layout"
import style from '../../styles/Guitarra.module.css'

const Producto = ({guitarra, agregarCarrito}) => {
    const [cantidad, setCantidad] = useState(1)
    const {precio, nombre, descripcion, imagen,id } = guitarra[0]

    const handleSubmit = e =>{
      e.preventDefault();
      if (cantidad<1) {
        alert('Cantidad no Valida')
        return
        
      } 
      //agregar al carrito
      const guitarraSeleccionada ={
        id,
        imagen: imagen.url,
        nombre,
        precio,
        cantidad
      }
      agregarCarrito(guitarraSeleccionada)
    }
    return (
    <Layout
          pagina={`Guitarra ${nombre}`}
    >  
        <div className={style.guitarra}>
        <Image  priority="true"
        layout='responsive' width={150} height={350} 
         src={imagen.url} alt={`Imagen Guitarra ${nombre}`}
        />     
        <div className={style.contenido}>
             <h3>{nombre}</h3>
             <p className={style.descripcion}>{descripcion}</p>
             <p className={style.precio}>${precio}</p>

             <form className={style.formulario} onSubmit={handleSubmit}>
                <label>Cantidad:</label>
                <select
                     value={cantidad}
                     onChange={(e)=> setCantidad(parseInt(e.target.value))}
                     >
                    <option value="0"> -- Seleccione -- </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <input
                   type="submit"
                   value="Agregar al Carrito"
                />
             </form>            
        </div>
      </div>
    </Layout>  
  )
}

export async function getServerSideProps({query:{url}}){
 //  console.log(url);
     const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
     const respuesta = await fetch(urlGuitarra)
     const guitarra = await respuesta.json()
//     console.log(guitarra[0]);    
 return{
        props:{
           guitarra
        }
    }

}

export default Producto