import clsx from 'clsx';
import styles from './PopperSearch.module.scss';
function Wrapper({ children, ClassName }) {
  return <div className={clsx(styles.wrapper, ClassName)}>{children}</div>;
}

export default Wrapper;
