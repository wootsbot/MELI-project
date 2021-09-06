import { useState, Children, isValidElement } from 'react';

import styles from './styles.module.scss';

import BreadcrumbItem from './Item';

function insertSeparators(items, className, separator) {
  return items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(
        current,
        <li aria-hidden key={`separator-${index}`} className={className}>
          {separator}
        </li>,
      );
    } else {
      acc.push(current);
    }

    return acc;
  }, []);
}

function Breadcrumb({ children, className, ...other }) {
  const allItems = Children.toArray(children)
    .filter((child) => {
      return isValidElement(child);
    })
    .map((child, index) => (
      <li className={styles.li} key={`child-${index}`}>
        {child}
      </li>
    ));

  return (
    <nav aria-label="breadcrumb" {...other}>
      <ol className={styles.ol}>{insertSeparators(allItems, styles.separator, '>')}</ol>
    </nav>
  );
}

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
