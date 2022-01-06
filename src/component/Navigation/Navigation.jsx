import {NavLink} from 'react-router-dom';

export default function Navigation() {

    const styles = {
        link: {
          display: 'inline-block',
          textDecoration: 'none',
          padding: 12,
          fontWeight: 700,
          color: '#303C6C',
        },
        activeLink: {
          color: '#F4976C',
        },
      };    

    return (
        <nav>
            <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>Главная</NavLink>

            <NavLink to="/training" exact style={styles.link} activeStyle={styles.activeLink}>Тренировки</NavLink>

            <NavLink to="/photo" exact style={styles.link} activeStyle={styles.activeLink}>Фото</NavLink>

            <NavLink to="/about" exact style={styles.link} activeStyle={styles.activeLink}>О нас</NavLink>

            <NavLink to="/contacts" exact style={styles.link} activeStyle={styles.activeLink}>Контакты</NavLink>
        </nav>
    )
}