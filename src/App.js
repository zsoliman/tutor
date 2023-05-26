import './App.css';
import Home from './components/Home';
import Learn from './components/Learn';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='/learn'
            element={<Learn />}
          />

        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  );
}

export default App;
