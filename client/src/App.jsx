import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Home from './pages/Home';
import NewsItems from './pages/News';
import Tags from './pages/Tags';
import Profile from './components/Profile/Profile'


const App = ()=> {
  
    return (
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noticias" element={<NewsItems />} />
      <Route path="/etiquetas" element={< Tags/>} />
      <Route path="/Perfil" element={< Profile />} />
        
        
        </Routes>
      </Router>
      
    );
  }


export default App;