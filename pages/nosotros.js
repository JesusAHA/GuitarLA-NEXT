
import Layout from '../components/Layout'
import Image from 'next/image'
import style from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <div>
       <Layout
        pagina="Nosotros"
       >
        <main className='contenedor'>
                 <h2 className='heading'> Nosotros</h2>
                 <div className={style.contenido}>
                     <Image layout='responsive' width={600} 
                     height={450} src="/img/nosotros.jpg" alt='imagen sobre nosotros'/>          
                    <div>
                         <p>
                               asmdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                               asdddddddddddddddddddddddddddddddddddddddd
                               asddddddddddddddddddddddddddddddddddddddddd
                               asdddddddddddddddddddddddddddddddddddddddd
                         </p>
                    </div>
                 </div>
        </main>


       </Layout>
       nosotros
    </div>
  )
}

export default Nosotros
