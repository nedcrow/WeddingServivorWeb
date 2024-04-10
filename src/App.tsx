import { Route, Link, Routes } from "react-router-dom";
import './less/app.less';

//routing components
import Home from "./page/Home";
import Footer from "./components/Footer";
// import Router1 from "./page/Router1";
// import Router2 from "./page/Router2";

function App() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>      
      <Footer/>
    </div>
  );
}

export default App;