import styles from './Stock.module.css'

import { useHistory } from 'react-router-dom'

import { Rate } from 'antd'
// import { GrCart } from 'react-icons/gr'
// import { CgShoppingCart } from 'react-icons/cg'

/*export function Stock({ data }) {
  // move to next page
  const history = useHistory()

  return (
    <div
      className={styles.container}
      onClick={() => history.push(`/stock/${data.id}`)}
    >
      <div>
        <img src={data.img} className={styles.img} />
      </div>
      {data.sale_to !== null && <div className={styles.sale}>sale</div>}

      <div className={styles.coverDetail}>
        <div>
          <span className={styles.name}>{data.stock_name}</span>
          <div className={styles.rateCustom}>
            <Rate disabled defaultValue={data.star} className={styles.star} />
          </div>
          <span className={styles.price}>฿ {data.price}</span>
        </div>
        <div className={styles.button}>
          <div className={styles.icon}>
            <IoCartOutline />
          </div>
          <span className={styles.textButton}>ADD TO CART</span>
        </div>
      </div>
    </div>
  )
}*/

import { NavLink } from 'react-router-dom'
import css from 'classnames'
import { IoCartOutline } from 'react-icons/io5'
import logo from '../../picture/logocoffee.png'

export function Stock() {
  return (
    <nav className={styles.Stock}>
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
            to="/updatestock"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            UPDATESTOCK
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

        <li className={css(styles.link, styles.cart)}>
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
