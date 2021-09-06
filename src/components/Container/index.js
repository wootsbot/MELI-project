import styles from './container.module.scss';

function Container({ ...others }) {
  return <div className={styles.root} {...others} />;
}

export default Container;
