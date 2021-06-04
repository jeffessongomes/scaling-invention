import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Part from './pages/Part';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/facaparte" component={Part} />
      </Switch>
    </BrowserRouter>
  );
}
