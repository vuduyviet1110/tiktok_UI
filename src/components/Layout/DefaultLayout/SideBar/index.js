import clsx from 'clsx';
import styles from './SideBar.module.scss';
function SideBar() {
  return (
    <h1 className={clsx(styles.wrapper)}>
      <div className={clsx(styles.forYou)}>For You</div>
      <div className={clsx(styles.Following)}>Followings</div>
      <div className={clsx(styles.Discovery)}>Discovery</div>
      <div className={clsx(styles.Live)}>Live</div>
    </h1>
  );
}

export default SideBar;
