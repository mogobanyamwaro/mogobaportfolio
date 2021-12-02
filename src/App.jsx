import './App.scss';
import Home from './pages/Home';
// import Test from './components/pdf/Pdf';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route component={Home} path="/" exact />
    </Router>
  );
}

export default App;
