// Đáng nhẽ phải import ./Todo/index.js nhưng mà webpack sẽ dò tìm trong thư mục nếu có index lấy luôn
import { PublicRoutes } from './Route/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/Layout/DefaultLayout';
import { Fragment } from 'react';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {PublicRoutes.map((route, index) => {
            let LayOut = DefaultLayout;
            const Page = route.component;

            if (route.layout) {
              LayOut = route.layout;
            } else if ((route.layout = null)) {
              LayOut = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <LayOut>
                    <Page />
                  </LayOut>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
