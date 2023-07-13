import style from './Footerrr.module.css'

export const Footer = () => {
    return (
        <footer>
            <span className={style.boldFont}>&copy; 2023 </span>
            <span className={style.square}>All rights reserved by Stark</span>
        </footer>
    )
}