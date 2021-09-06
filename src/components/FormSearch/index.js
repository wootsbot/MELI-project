/* eslint-disable @next/next/no-img-element */

import { useFormContext } from 'react-hook-form';

import styles from './input.module.scss';

function FormSearch({ ...others }) {
  const { register } = useFormContext();

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        aria-label="search"
        tabIndex="2"
        placeholder="Nunca dejes de buscar"
        {...register('searchField', {
          required: true,
        })}
      />

      <button className={styles.button} tabIndex="3" type="submit">
        <img className={styles.icon} src="/static/images/png/ic_Search@2x.png" alt="search" type="submit" />
      </button>
    </div>
  );
}

export default FormSearch;
