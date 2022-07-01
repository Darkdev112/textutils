import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "success");
      document.title = "Textutils - Dark Mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "Textutils";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutUs="About TextUtils" mode={mode} toggleMode={toggleMode} ></Navbar>
        <div className="something" style={{ height: "50px", width: "100vw" }}>
          <Alert alert={alert}></Alert>
        </div>
        <Routes>
          <Route exact path="about" element={<About mode={mode}></About>} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert}></TextForm>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
