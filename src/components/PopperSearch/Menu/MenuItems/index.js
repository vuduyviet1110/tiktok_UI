import Button from '@/components/Button';
import styles from '../Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
  const classes = cx(styles.ThemeBtn, {
    separator: data.separator,
  });
  //lấy phần tử cuối để render ra UI
  if (data.button) {
    return (
      <div className={classes}>
        <Button to={data.to} customeClass={styles.menu_item} leftIcon={data.icon} onClick={onClick}>
          {data.title}
        </Button>
        <div className={styles.FormSwitchBtn}>{data.button}</div>
      </div>
    );
  }
  return (
    <div className={classes}>
      <Button to={data.to} customeClass={styles.menu_item} leftIcon={data.icon} onClick={onClick}>
        {data.title}
      </Button>
    </div>
  );
}
export default MenuItems;
