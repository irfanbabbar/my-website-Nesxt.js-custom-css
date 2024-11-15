// components/Header.js
import Link from 'next/link';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          MyWebsite
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <oi>
            <Link href="/">
              Home
            </Link>
          </oi>
          <oi>
            <Link href="/services">
              Services
            </Link>
          </oi>
          <oi>
            <Link href="/blog">
              Blog
            </Link>
          </oi>
          <oi>
            <Link href="/contact">
              Contact
            </Link>
          </oi>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
