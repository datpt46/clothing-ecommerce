import { ConnectedRouter } from "connected-react-router";
import { AppProvider } from "provider";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { history } from "utils";
import App from "./App";
import "./index.css";
import createPersistStore from "./redux/store-persist-router";

const { store, persistor } = createPersistStore();

ReactDOM.render(
  <AppProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </AppProvider>,
  document.getElementById("root")
);
