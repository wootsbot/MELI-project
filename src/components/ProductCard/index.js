import Image from 'next/image';
import Link from 'next/link';

import clearThumbnail from '@/utils/clear-thumbnail';
import formatPrice from '@/utils/format-price';

import styles from './productCard.module.scss';

function ProductCard({ to = '/', imageSrc, price, title, address }) {
  return (
    <Link href={to}>
      <a className={styles.root}>
        <div className={styles['thumbnail-wrapper']}>
          <Image className={styles.thumbnail} src={clearThumbnail(imageSrc)} width={180} height={180} alt={title} />
        </div>

        <div className={styles.info}>
          <div className={styles['price-and-address']}>
            <span className={styles.price}>{`$ ${formatPrice(price)}`}</span>
            <div className={styles.spacer} />
            <div className={styles.addressWrapper}>
              <address className={styles.address}>{address?.state_name}</address>
            </div>
          </div>

          <h3 className={styles.title}>{title}</h3>
        </div>
      </a>
    </Link>
  );
}

export default ProductCard;
