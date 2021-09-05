/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';

import styles from './brand.module.scss';

function Brand() {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <img className={styles.brand} src="/static/images/png/Logo_ML@2x.png" alt="search" />
      </Link>
    </div>
  );
}

export default Brand;
