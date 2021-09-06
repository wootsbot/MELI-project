import IconEmptySearch from '@/components/icon-empty-search';

import styles from './styles.module.scss';

const iconsComponents = {
  info: IconEmptySearch,
};

function DisplayMessage({ title, message, type = 'info' }) {
  const IconComponent = iconsComponents[type];

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <IconComponent />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
}

export default DisplayMessage;
