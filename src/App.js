import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Learn from './components/Learn';
import Course from './components/Course';

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

          <Route
            path='/course'
            element={<Course />}
          />

        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  );
}

export default App;
