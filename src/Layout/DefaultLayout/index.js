import Header from '../SharedElement/Header';
import SideBar from './SideBar/index';
import { clsx } from 'clsx';
import layoutCSS from './DefaultLayout.module.scss';
function DefaultLayout({ children }) {
  return (
    <div className={clsx(layoutCSS.wrapper)}>
      <Header />
      <div className={clsx(layoutCSS.container)}>
        <SideBar />
        <div className={clsx(layoutCSS.content)}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
