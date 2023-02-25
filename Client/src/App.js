import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import { Routers } from "./components/routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";

// redux inport statements
import { Provider } from "react-redux";
import store from "../src/components/redux/store";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/authAction";
const Navigate = useNavigate();
function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser()); }
      else {
        // send the user to landing page
        Navigate("/")
      }
   
  }, []);
  const appName = "Upgradeconnector";
  return (
    <>
      <Provider store={store}>
      <Router>
        <Header appName={appName}></Header>

        <Routers></Routers>
        <Footer appName={appName}></Footer>
      </Router>
      </Provider>      
    </>
  );
};

export default App;
