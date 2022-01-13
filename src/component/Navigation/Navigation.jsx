import {NavLink} from 'react-router-dom';

import {Button,Box} from '@mui/material/';


export default function Navigation() {

    const styles = {
        link: {
          display: 'inline-block',
          textDecoration: 'none',
          padding: 12,
          fontWeight: 700,
          color: 'orange',
        },
      };    

    return (
        <nav>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            <NavLink to="/" exact style={styles.link}>Главная</NavLink>
          </Button>

          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            <NavLink to="/training" exact style={styles.link}>Тренировки</NavLink>
          </Button>
          
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            <NavLink to="/photo" exact style={styles.link}>Фото</NavLink>
          </Button>
            
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            <NavLink to="/about" exact style={styles.link}>О нас</NavLink>
          </Button>
          
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            <NavLink to="/contacts" exact style={styles.link}>Контакты</NavLink>
          </Button>
        </Box>
        </nav>
    )
}