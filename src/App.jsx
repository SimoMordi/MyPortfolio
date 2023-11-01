
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeComponent from './components/HomeComponent';
import AboutMeComponent from './components/AboutMeComponent';
import ProjectsComponent from './components/ProjectsComponent';


const App = () => {
  return (
   <>    
      <Routes>
        <Route path="/" element={< HomeComponent />} />
        <Route path="/about" element={<AboutMeComponent />} />
        <Route path="/projects" element={<ProjectsComponent />} />
      </Routes>

      <Navbar />   
   </>      
  );
};

export default App;