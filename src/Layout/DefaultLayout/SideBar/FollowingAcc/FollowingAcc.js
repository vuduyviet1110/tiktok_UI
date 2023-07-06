import AccountItems from '@/components/AccountItems/';
import ava from '@/assets/image/ava.jpg';
import ava2 from '@/assets/image/ava2.jpg';
import styles from './FollowingAcc.module.scss';
const users = [
  {
    id: 1,
    full_name: 'Johnny',
    nickname: 'Johndz124',
    avatar: ava,
  },
  {
    id: 2,
    full_name: 'Tammy',
    nickname: 'TammyNoLie',
    avatar: ava2,
  },
  {
    id: 3,
    full_name: 'Vitra',
    nickname: 'Vitra.Vu',
    avatar: ava,
    tick: true,
  },
  {
    id: 4,
    full_name: 'Ivan',
    nickname: 'IvanNguyen',
    avatar: ava2,
  },
];
function FollowingAcc() {
  return (
    <div className={styles.Accounts}>
      <h3 style={{ margin: 0 }}>Following Accounts</h3>
      <div className={styles.AccItems}>
        {users.map((data) => (
          <AccountItems key={data.id} data={data} props />
        ))}
      </div>
      <h4>See more</h4>
    </div>
  );
}

export default FollowingAcc;
