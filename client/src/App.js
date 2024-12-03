import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Checklist from './components/Checklist.js';


function App() {
  return (
    <div className="App">
    <header className="App-header">

    <div>
      <h1>Upwork Proposals</h1>

      <Link className="NavLink" to="/checklist">Checklist</Link> || 
      <Link className="NavLink" to="/">Home</Link> || 

      </div>
    
      
            <Routes>
                <Route path="/checklist" element={<Checklist />} />

            </Routes>
              
</header>
    </div>
  );
}

export default App;

