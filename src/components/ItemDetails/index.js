import Image from 'next/image';

import clearThumbnail from '@/utils/clear-thumbnail';
import formatPrice from '@/utils/format-price';

import styles from './itemDetails.module.scss';

function ItemDetails({ thumbnail = '', title, description, price, soldQuantity, condition }) {
  return (
    <div className={styles.root}>
      <div className={styles.details}>
        <div>
          <Image
            className={styles.thumbnail}
            src={clearThumbnail(thumbnail)}
            alt={title}
            width={680}
            height={680}
            layout="fixed"
          />
        </div>

        <div>
          <div>
            <span>{condition}</span>
            <span>-</span>
            <span>{soldQuantity}</span>
            <span>vendidos</span>
          </div>

          <div>
            <button>Comprar</button>
          </div>

          <h1 className={styles.title}>{title}</h1>
          <span>{`$ ${formatPrice(price)}`}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
