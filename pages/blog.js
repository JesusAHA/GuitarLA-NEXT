//import Head from 'next/head'
//import Link from 'next/Link'
//import { useEffect } from 'react'
  // Sin Next asi se haria la exportacion de la informacion a la pagina web que hemos creado
 /*  useEffect(() => {
       const consultarAPI = async ()=>{
         const url='http://localhost:1337/blogs'
         const respuesta = await fetch(url)
         const resultado = await respuesta.json(respuesta)
         console.log(resultado);
       }
       consultarAPI()
  }, []) */
    // console.log(entradas)

import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'

const Blog = ({entradas}) => {
  // const url =`${process.env.NEXT_PUBLIC_API_URL}/blogs`
  return (
    
       <Layout
        pagina="Blog"
       >
        <main className='contenedor'>
         <ListadoBlog
             entradas={entradas}
         />
        </main>
        
        </Layout>
       
    
  )
}
export async function getStaticProps(){
   //getServerSideProps va a la API y construye una respuesta cada que entras ala sitio
   //getStaticProps va contruye y siempre usa el archivo que ya fue construido
    const url= `${process.env.API_URL}/blogs?_sort=created_at:desc`
    //`${process.env.API_URL}/blogs`
    //console.log(url);
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
  // console.log(entradas);
  
     return{
          props:{
            entradas
          }
     }

}
export default Blog