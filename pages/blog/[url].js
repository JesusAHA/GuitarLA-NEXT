import Image from "next/image"
//import {useRouter} from 'next/router'
import Layout from "../../components/Layout"
import {formatearFecha} from "../../helpers"
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {
  //  const router = useRouter()
   const {contenido,imagen,published_at, titulo} = entrada[0]
  return (
    <Layout
       pagina={titulo}
    >
    <main className="contenedor">
         <h1 className="heading">{titulo}</h1>
         <article className={styles.entrada}>
           <Image layout="responsive" width={800} height={600}
           src={imagen.url} alt={`Imagen Entrada ${titulo}`}/>
           <div className={styles.contenido}>
               <p className={styles.fecha}>{formatearFecha(published_at)}</p>
               <p className={styles.texto}>{contenido}</p>
           </div>
         </article>
    </main>
    </Layout>
  )
}

export async function getStaticPaths(){
 // const url='http://localhost:1337/blogs'
  const url= `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url);
  const entradas = await respuesta.json()
  const paths = entradas.map(entrada=>({
     params:{ url: entrada.url}
  }))
  return{
    paths,
    //fallback para poner el numero de entradas solicitadas
    fallback: false
  }
}

export async function getStaticProps({params:{url}}){
 //   const url=`http://localhost:1337/blogs/${id}`
      const urlBlog= `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()

    return{
        props:{
              entrada
        }
    }
}

export default EntradaBlog