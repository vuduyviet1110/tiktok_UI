import Header from './Header';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
