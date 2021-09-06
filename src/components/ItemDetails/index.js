import Image from 'next/image';

import Margin from '@design-system/Margin';
import ButtonPrimary from '@design-system/ButtonPrimary';

import formatPrice from '@/utils/format-price';
import clearThumbnail from '@/utils/clear-thumbnail';
import { conditionTypesLabels } from '@/utils/items/condition-types';

import styles from './itemDetails.module.scss';

function ItemDetails({ thumbnail = '', title, description, price, soldQuantity, condition }) {
  return (
    <div className={styles.root}>
      <div className={styles.details}>
        <div className={styles['thumbnail-wrapper--lg']}>
          <Image
            className={styles.thumbnail}
            src={clearThumbnail(thumbnail)}
            alt={title}
            width={680}
            height={680}
            layout="fixed"
          />
        </div>

        <div className={styles['thumbnail-wrapper--sm']}>
          <Image
            className={styles.thumbnail}
            src={clearThumbnail(thumbnail)}
            alt={title}
            width={400}
            height={400}
            layout="fixed"
          />
        </div>

        <div>
          <Margin className={styles.header} side="bottom" xs={16}>
            <span>{`${conditionTypesLabels[condition]} - ${soldQuantity} vendidos`}</span>
          </Margin>

          <h1 className={styles.title}>{title}</h1>

          <Margin xs={32}>
            <span className={styles.price}>{`$ ${formatPrice(price)}`}</span>
          </Margin>

          <ButtonPrimary>Comprar</ButtonPrimary>
        </div>
      </div>

      <div>
        <Margin side="bottom" xs={32}>
          <h2 className={styles['description-title']}>Descripción del producto</h2>
        </Margin>

        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ItemDetails;
