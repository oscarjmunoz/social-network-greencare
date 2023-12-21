
import Sidebar from '../components/Sidebar/Sidebar'; 
import Feed from '../components/Feed/Feed';
import Search from '../components/Search/Search';
import Header from '../components/barra_header/Header';
import Comment from '../components/Comment/Comment';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../components/Theme/Theme'; // Importa tu tema personalizado





function Home() {
  return (
    <div >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar />
      <Search />  
      <Header />
      <Comment /> 
      <Feed />
    </ThemeProvider>

    </div>
    
  );
}

export default Home;