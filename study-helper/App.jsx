import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Stop from './stopwatch.jsx';
import Home from './home.jsx';
import Pomo from './pomo.jsx';
import Short from './short.jsx';
import Long from './long.jsx';
function App() {

  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stopwatch" element={<Stop />} />
                <Route path="/pomo" element={<Pomo />} />
                <Route path="/short" element={<Short />} />
                <Route path="/long" element={<Long />} />
                {/* Add other routes as needed */}
            </Routes>
    </Router>
  );
}

export default App
