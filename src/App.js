import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {  // Alert will be dismissed after 2 seconds
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Enable Light Mode");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled!", "success");
    }
    else {
      setMode("light");
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtilities" themeMode={mode} toggleThemeMode={toggleMode} toggleBtnText={btnText} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch> 
            <Route exact path="/about">
              <About themeMode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter Text" themeMode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
