import styles from './Menu.module.scss';
import PoperSearch from '../Wrapper';
import TippyHeadless from '@tippyjs/react/headless';
import MenuItems from './MenuItems';
import SubMenuItemHeader from './MenuItems/subMenuItem';
import { useState } from 'react';

function Menu({ children, onChange, items = [] }) {
  const [History, setHistory] = useState([{ data: items }]);
  const currentMenu = History[History.length - 1];

  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      const isParentMenu = !!item.children;

      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParentMenu) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        ></MenuItems>
      );
    });
  };
  return (
    <TippyHeadless
      hideOnClick="false"
      delay={[0, 700]}
      offset={[12, 10]}
      interactive
      placement="bottom-end"
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
      render={(attrs) => (
        <div className={styles.container} tabIndex="-1" {...attrs}>
          <PoperSearch ClassName={styles.items_poper}>
            {History.length > 1 && (
              <SubMenuItemHeader
                title="Language"
                // xóa phần tử cuối trong array
                onBackClick={() => {
                  //Mảng này sẽ trả về các phần tử từ 0 đến gần cuối
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={styles.allItems}>{renderItems()}</div>
          </PoperSearch>
        </div>
      )}
    >
      {children}
    </TippyHeadless>
  );
}

export default Menu;
