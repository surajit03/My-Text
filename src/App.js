import './App.css';
import Header from './componet/Header';
import Box from './componet/Box';
import React,{useState} from 'react';
import Alerts from './componet/Alerts';
import About from './componet/About';
import{
  BrowserRouter as Router,
  Route,
  Link,
  Routes
}from "react-router-dom"

function App() {
  const [mode, setmode] = useState("light");

  const [alerts, setAlerts] = useState(null);

  const collerMode=()=>{
    if (mode === 'light') {
      setmode('#000')
      document.body.style.background='#2e5378'
      document.title='text-dark'
    }
    else{
      setmode("light")
      document.body.style.background='white'
      document.title='text-light'

    }


  const getalerts=(mgs,type)=>{
    setAlerts({
      mgs: mgs,
      type: type

    })
  }

  }
  return (
    <Router>
      <div className="nebBar">
        <Header about='Home' Features="About" mode={mode} collerMode={collerMode}  />
        <Alerts alerts={alerts}  />
         <Routes>
            <Route path="/" element={ <Box mode={mode} />}>
              <Route path="*" element={<About about="About"/>} />
            </Route>
          </Routes>
      </div>
      </Router>

  
  );
}

export default App;
