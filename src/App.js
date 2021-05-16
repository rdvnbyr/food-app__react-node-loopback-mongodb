import { BrowserRouter as Router } from "react-router-dom";

import { store, persistor } from "./_redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Layout/Header/Header";
import Routes from "./Routes";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Router>
            <Header />
            <>
              <Routes />
            </>
          </Router>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
