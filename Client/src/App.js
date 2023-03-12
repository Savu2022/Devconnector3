import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import { Routers } from "./components/routers/Routers";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

// redux import statements
import { Provider } from "react-redux";
import store from "./components/redux/store";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/authAction";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(localStorage.token);
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    } else {
      navigate("/");
      // send the user to landing page.
    }
  }, []); // we are not accessing any props.
  const appName = "UpgradeConnector";
  return (
    <>
      <Provider store={store}>
        <Header appName={appName}></Header>

        <Routers></Routers>
        <Footer appName={appName}></Footer>
      </Provider>
    </>
  );
}

export default App;
