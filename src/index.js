import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import i18n from './i18n';
import { I18nextProvider } from "react-i18next";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  
  // function App() {
  //   return (
  //     <div className="App">
  //       <App />
  //     </div>
  //   );
  // }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
    </I18nextProvider>,
    rootElement
  );
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
