 
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import { Box } from '@mui/material'

//components
import Header from './components/header/Header';
import DetailView from './components/details/DetailView';
//import TemplateProvider from './templates/TemplateProvider';
import DataProvider from './context/DataProvider';
//import ContextProvider from './context/ContextProvider';
import Cart from './components/cart/Cart';

function App() {
  return (
    // <TemplateProvider>
    //   <ContextProvider>
      <DataProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/product/:id' element={<DetailView />} />
              <Route path= '/cart' element={<Cart />} />
            </Routes>
          </Box>
        </BrowserRouter>
        </DataProvider>
    //   </ContextProvider>
    // </TemplateProvider>
  );
}

export default App;
