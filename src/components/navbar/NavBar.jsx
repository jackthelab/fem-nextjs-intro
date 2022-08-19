import Link from 'next/link';
import styles from './navbar.module.css';

const NavBar = () => (
  <div className={styles.navbar}>

    {/* Logo Section */}
    <div className={styles.no_mw}>
      <h1 className={styles.m_no_vertical}>Logo</h1>
    </div>

    {/* Name Section */}
    <div className={styles.no_mw}>
      <h1 className={styles.m_no_vertical}>Name</h1>
    </div>

    {/* Links Section */}
    <div className={styles.nav_links}>
      <span className={styles.link}>
        <Link href='/about' className={styles.link}>About</Link>
      </span>
      <span className={styles.link}>
        <Link href='/contact'>Contact</Link>
      </span>
      <span className={styles.link}>
        <Link href='/'>Home</Link>
      </span>
    </div>

  </div>
);

export { NavBar }