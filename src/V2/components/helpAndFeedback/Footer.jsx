import { Contact } from './Contact'
import style from './Footerrr.module.css'

export const Footer = () => {
    return (
        <footer>
            <span className={style.boldFont}>&copy; 2024 </span>
            <span className={style.square}>All rights reserved by Stark Batch</span>
            <Contact/>
        </footer>
    )
}