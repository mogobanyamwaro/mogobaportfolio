import './App.scss';
import Home from './pages/Home';
// import Test from './components/pdf/Pdf';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mycv from './pages/Mycv';

function App() {
  return (
    <Router>
      <Route component={Home} path="/" exact />
      {/* <Route component={Mycv} path="/mycv" exact /> */}
    </Router>
  );
}

export default App;
