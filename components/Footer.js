import Link from "next/link"
import style from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={`contenedor ${style.contenido}`}>
            <nav className={style.navegacion}>
               <Link href="/">Inicio</Link>
               <Link href="/nosotros">Nosotros</Link>
               <Link href="/blog">Blog</Link>
               <Link href="/tienda">Tienda</Link>
            </nav>
            <p className={style.copyrigth}>
                Todos los Derechos Reservados
            </p>
        </div>
    </footer>
  )
}

export default Footer