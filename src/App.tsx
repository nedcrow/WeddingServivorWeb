import { Route, Link, Routes } from "react-router-dom";
import './less/app.less';

//routing components
import Home from "./page/Home";
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
      {/* <div>
        <p>
          <Link to="/">홈</Link>
        </p>
      </div>       */}
    </div>
  );
}

export default App;