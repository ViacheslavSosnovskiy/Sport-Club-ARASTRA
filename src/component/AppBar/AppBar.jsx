import Navigation from '../Navigation'
import {NavLink} from 'react-router-dom';

import { BsTrophyFill } from "react-icons/bs";

export default function AppBar () {

    const styles = {
        header: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #303C6C',
        },
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
        <header style={styles.header}>
          
          <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
          <BsTrophyFill />
            ВОЛЬНИК
          </NavLink>

          <Navigation />

        </header>
    )
}