import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => (
  <>
    <div style={{ height: '200vh' }} />
    <nav>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link href='/'>
            <a>homepage</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/static-page-foo' prefetch>
            <a>static page foo</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/static-page-bar' prefetch>
            <a>static page bar</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/dynamic-page-rick' prefetch>
            <a>dynamic page rick</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/dynamic-page-morty'>
            <a>dynamic page morty</a>
          </Link>
        </li>
      </ul>
    </nav>
    <hr />
  </>
)

export default Nav
