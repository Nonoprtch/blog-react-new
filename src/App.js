import logo from './logo.svg';
import './App.css';

import Cv from './PAGES/CV/Cv';
import  {Routes, Route, Link} from "react-router-dom"
import PageError from "./PAGES/PageError/Error"
import Blog from "./PAGES/Blog/Blog"
import Counter from './PAGES/Counter/Counter';
import Toggle from './PAGES/Toggle/Toggle';
import Object from './PAGES/Object/Object';
import List from './PAGES/List/List';




function App() {
 
  
  return (
    <div className="">
      <Routes>
        <Route index element={<Cv />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/" element={<PageError/>} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Counter" element={<Counter/>} />
        <Route path="/Toggle" element={<Toggle/>} />
        <Route path="/Liste" element={<List/>} />
        <Route path="/Object" element={<Object/>} />
        <Route path="*" element={<PageError/>} />

      </Routes>




    </div>
  );
}

export default App;
