import clsx from 'clsx';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div>Brand</div>

          <div className={styles.form}>
            <form>
              <input className={styles.input} type="text" placeholder="Search" />
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
