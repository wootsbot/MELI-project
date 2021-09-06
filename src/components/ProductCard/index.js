/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

import Margin from '@design-system/Margin';

import clearThumbnail from '@/utils/clear-thumbnail';
import formatPrice from '@/utils/format-price';

import styles from './productCard.module.scss';

function ProductCard({ to = '/', imageSrc, price, title, address, isFreeShipping }) {
  return (
    <Link href={to}>
      <a className={styles.root}>
        <div className={styles['thumbnail-wrapper']}>
          <Image className={styles.thumbnail} src={clearThumbnail(imageSrc)} width={180} height={180} alt={title} />
        </div>

        <div className={styles.info}>
          <div className={styles['price-and-address']}>
            <div className={styles.shipping}>
              <span className={styles.price}>{`$ ${formatPrice(price)}`}</span>

              {isFreeShipping && (
                <Margin side="left" xs={8}>
                  <img
                    className={styles['shipping-free']}
                    src="/static/images/png/ic_shipping@2x.png"
                    alt="isFreeShipping"
                  />
                </Margin>
              )}
            </div>

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
