import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
