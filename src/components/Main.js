import { Switch, Route } from 'react-router-dom';
import Snacks from './Card/Card'

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Snacks} />
        {/* <Route path="/snacks" component={Snacks} /> */}
      </Switch>
    </main>
  );
}
export default Main;