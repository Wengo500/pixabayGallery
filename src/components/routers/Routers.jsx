import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import CardPage from '../cardPage/CardPage'
import MainPage from '../mainPage/MainPage';

const Main = ({jsonObj}) =>{
  const [cardId, setCardId] = useState({})
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" name="Home" render={() => <MainPage jsonObj={jsonObj} setCardId={setCardId}/>} />
        <Route exact path="/CardPage" name="CardPage" render={() => <CardPage jsonObj={jsonObj} cardId={cardId}/>} />
      </Switch>
    </main>
  )
};

export default Main