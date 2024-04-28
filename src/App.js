import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";



export default function App() {
  return (
 

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
          <Route path="skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);