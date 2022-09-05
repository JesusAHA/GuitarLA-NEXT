import Image from "next/image"
import Link from "next/link"
import style from '../styles/Guitarra.module.css'
const Guitarra = ({guitarra}) => {
    const {descripcion,url,precio, nombre, imagen} = guitarra
  return (
    <div className={style.guitarra}>
         <Image  priority="true"
         layout='responsive' width={150} height={350} 
          src={imagen.url} alt={`Imagen Guitarra ${nombre}`}
         />     
         <div className={style.contenido}>
              <h3>{nombre}</h3>
              <p className={style.descripcion}>{descripcion}</p>
              <p className={style.precio}>${precio}</p>
              <Link href={`/guitarras/${url}`}>
                <a className={style.enlace}>
                 Ver Producto</a>
              </Link>
         </div>
    </div>
  )
}

export default Guitarra
