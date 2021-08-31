import styles from './productsList.module.scss';

function ProductsList({ children }) {
  return <ol className={styles.root}>{children}</ol>;
}

export default ProductsList;
