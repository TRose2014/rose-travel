import { Switch, Route } from 'react-router-dom';
import ItemCard from './Card/Card';
import HomePage from './HomePage/HomePage';
import TopFive from './TopFive/TopFive';
import data from '../data/data.json';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/snacks" component={() => (<ItemCard data={data[1]} />)} />
        <Route path="/drinks" component={() => (<ItemCard data={data[0]} />)} />
        <Route exact path="/top5" component={TopFive} />
      </Switch>
    </main>
  );
}
export default Main;
