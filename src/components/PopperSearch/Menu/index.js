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
      delay={[]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={styles.container} tabIndex="-1" {...attrs}>
          <PoperSearch ClassName={styles.items_poper}>
            {History.length > 1 && (
              <SubMenuItemHeader
                title="Language"
                onBackClick={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PoperSearch>
        </div>
      )}
    >
      {children}
    </TippyHeadless>
  );
}

export default Menu;
