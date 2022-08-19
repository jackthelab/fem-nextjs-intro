import styles from './navbar.module.css';

const NavBar = () => (
  <div className={styles.navbar}>
    <div className={styles.no_mw}>
      <h1 className={styles.m_no_vertical}>Logo</h1>
    </div>
    <div className={styles.no_mw}>
      <h1 className={styles.m_no_vertical}>Name</h1>
    </div>
    <div className={styles.nav_links}>
      <a className={styles.link} href='/about'>
        About
      </a>
      <a className={styles.link} href='/contact'>
        Contact
      </a>
      <a className={styles.link} href='/'>
        Home
      </a>
    </div>
  </div>
);

export { NavBar }