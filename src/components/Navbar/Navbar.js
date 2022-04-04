import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import css from 'classnames'

import { IoCartOutline } from 'react-icons/io5'
import logo from '../../picture/logocoffee.png'

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.shopName}>
        <img src={logo} alt="Logocoffee" width={45} />
        <NavLink to="/">COFFEE SHOP</NavLink>
      </div>
      <ul className={styles.text}>
        <li className={styles.link}>
          <NavLink
            exact
            to="/"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            STOCK
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/restock"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            RESTOCK
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/dashboard"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            DASHBOARD
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/employee"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            EMPLOYEE
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/member"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            MEMBER
          </NavLink>
        </li>
        <div className={styles.divider} />

        <li className={css(styles.link, styles.cart)}>
          {/* <NavLink
            to="/cart"
            activeClassName={styles.active}
            className={css(styles.navlink)}
          >
            <IoCartOutline size={24} />
          </NavLink> */}
          <div activeClassName={styles.active} className={css(styles.navlink)}>
            <IoCartOutline size={24} />
          </div>
        </li>

        <li className={styles.link}>
          <div activeClassName={styles.activeLogin} className={styles.login}>
            LOGIN
          </div>
        </li>
      </ul>
    </nav>
  )
}
