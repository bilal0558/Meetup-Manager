import { Link } from 'react-router-dom';

import styles from './NavBar.module.css'

function NavBar() {
    return (
        <header>
            <nav>
                <p>Meetups Manager</p>
                <ul>
                    <li>
                        <Link to="/" className={styles.navLink}>View All</Link> 
                    </li>
                    <li>
                        <Link to="/new-meetup" className={styles.navLink}>Add</Link> 
                    </li>
                    <li>
                        <Link to='/important-meetup' className={styles.navLink}>Important</Link> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;