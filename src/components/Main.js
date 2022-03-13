import { Switch, Route } from 'react-router-dom';
import Card from './Card/Card'
import HomePage from './HomePage/HomePage'
import data from '../data/data.json';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/snacks" component={() => (<Card data={data[1]} />)} />
        <Route path="/drinks" component={() => (<Card data={data[0]} />)} />
      </Switch>
    </main>
  );
}
export default Main;
