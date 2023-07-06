import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function MenuItems({ to, title, icon, activeIcon }) {
  return (
    <NavLink to={to} className={(nav) => cx('wrapper', { active: nav.isActive })}>
      <div className={styles.Activeicon}>{activeIcon}</div>
      <div className={styles.icon}>{icon}</div>
      <h2 className={styles.title}>{title}</h2>
    </NavLink>
  );
}

export default MenuItems;
