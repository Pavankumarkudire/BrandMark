import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="App">
            <Home />
          </div>
      </Router>
  );
}

export default App;
