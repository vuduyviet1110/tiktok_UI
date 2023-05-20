import Header from '@/components/Layout/SharedElement/Header';
function HeaderLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default HeaderLayout;
