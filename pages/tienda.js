/* import Head from 'next/head'
import Link from 'next/Link' */
import Layout from '../components/Layout'
import Listado from '../components/Listado';
  
const Tienda = ({guitarras}) => {
 // console.log(guitarras);
  return (
    <div>
       <Layout
        pagina="Tienda Virtual"
       >
        <main className='contenedor'>
          <h1 className='heading'>Desde Tienda</h1>
          <Listado
            guitarras={guitarras}
          />
        </main>
        </Layout>
       
    </div>
  )
}
export async function getServerSideProps(){
  //para agregarlos por precio se modifica el _sort=precio:desc
  const url =`${process.env.API_URL}/guitarras?_sort=created_at:desc`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()
 // console.log(guitarras); 
  return{
    props:{
      guitarras
    }
  }
}

export default Tienda