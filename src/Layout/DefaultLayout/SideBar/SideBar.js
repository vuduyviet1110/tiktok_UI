import clsx from 'clsx';
import styles from './SideBar.module.scss';
import Menu from './Menu.js/Menu';
import FollowingAcc from './FollowingAcc/FollowingAcc';
import Footer from './Footer/Footer';
function SideBar() {
  return (
    <h1 className={clsx(styles.wrapper)}>
      <Menu></Menu>
      <FollowingAcc></FollowingAcc>
      <Footer></Footer>
    </h1>
  );
}

export default SideBar;
