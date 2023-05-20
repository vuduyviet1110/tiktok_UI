import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItems.module.scss';
import {} from '@fortawesome/free-regular-svg-icons';
import ava from '@/assets/ava.jpg';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
function AccountItems() {
  return (
    <div className={styles.wrapper}>
      <img src={ava} className={styles.avatar} alt="Vitra.Vũ" />
      <div className={styles.info}>
        <span className={styles.user}>
          <h3 className={styles.name}>Viet</h3>
          <FontAwesomeIcon icon={faCircleCheck} className={styles.checkIcon} />
        </span>
        <h5 className={styles.name2}>Vitra.Vu</h5>
      </div>
    </div>
  );
}

export default AccountItems;
