
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Routers from './components/routers/Routers'


function App() {
  let jsonObj = useSelector(store => store.jsonObj)
  
  return (
    <BrowserRouter>
      <Routers jsonObj={jsonObj}/>
    </BrowserRouter>
  );
}

export default App;