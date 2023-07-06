import MenuItems from './MenuItems';
import { Config } from '@/Config';
import { MenuSideBarIcons } from '@/components/Icons';
import styles from './Menu.module.scss';
function Menu({}) {
  return (
    <div className={styles.container}>
      <MenuItems
        to={Config.Routes.Home}
        title="For You"
        icon={MenuSideBarIcons.ForYouIcon}
        activeIcon={MenuSideBarIcons.ForYouActiveIcon}
      />
      <MenuItems
        to={Config.Routes.Following}
        title="Following"
        icon={MenuSideBarIcons.FollowingIcon}
        activeIcon={MenuSideBarIcons.FollowingActiveIcon}
      />
      <MenuItems
        to={Config.Routes.Explore}
        title="Explore"
        icon={MenuSideBarIcons.ExploreIcon}
        activeIcon={MenuSideBarIcons.ExploreActiveIcon}
      />
      <MenuItems
        to={Config.Routes.Live}
        title="Live"
        icon={MenuSideBarIcons.LiveIcon}
        activeIcon={MenuSideBarIcons.LiveActiveIcon}
      />
    </div>
  );
}

export default Menu;
