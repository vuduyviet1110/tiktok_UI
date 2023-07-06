import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItems.module.scss';
import {} from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Img from '../Image';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
function AccountItems({ data, props }) {
  return (
    <Link
      to={`/@${data.nickname}`}
      className={clsx(styles.wrapper, {
        [styles.props]: props,
      })}
    >
      <Img src={data.avatar} className={styles.avatar} alt={data.full_name} />
      <div className={styles.info}>
        <span className={styles.user}>
          <h3 className={styles.name}>{data.full_name}</h3>

          {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={styles.checkIcon} />}
        </span>

        <h5 className={styles.name2}>{data.nickname}</h5>
      </div>
    </Link>
  );
}

export default AccountItems;
