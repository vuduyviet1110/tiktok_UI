import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import styles from './subMenuItem.module.scss';
function SubMenuItemHeader({ title, onBackClick }) {
  return (
    <header className={clsx(styles.wrapper)}>
      <Button onClick={onBackClick} customeClass={clsx(styles.back_btn)}>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </Button>
      <h4 className={clsx(styles.SubMenuTitle)}>{title}</h4>
    </header>
  );
}

export default SubMenuItemHeader;
