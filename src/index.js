import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StoreProvider} from './Store';


// fake comments
function emitComment(id) {
  setInterval(() =>{
    //Tương tự như scroll, resize tự phát ra event còn hàm 
    // này là tự định nghĩa và phát ra thủ công do mình tự đặt
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`,{
        detail: `comment section of the lesson ${id}`
      })
    )
  },2000)
}

emitComment(1)
emitComment(2)
emitComment(3)
emitComment(4)
emitComment(5)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
