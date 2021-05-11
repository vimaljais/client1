import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
       <GlobalStyles/>
      <Router>
      <Home/>
      </Router>
    </div>
  );
}

export default App;
