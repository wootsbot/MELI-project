import clsx from 'clsx';

function ButtonPrimary({ children, className, ...others }) {
  return (
    <button className={clsx('button button--primary', className)} {...others}>
      <span className="button--label">{children}</span>
    </button>
  );
}

export default ButtonPrimary;
