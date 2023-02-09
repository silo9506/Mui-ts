import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Box } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine';
import Home from 'components/organisms/Home';
import Store from 'components/organisms/Store';
import About from 'components/organisms/About';
import Navbar from 'components/molecules/Navbar';
import { ShoppingCartProvider } from 'modules/ShoppingCartContext';
const App = () => {
  return (
    <ShoppingCartProvider>
      <Box sx={{ backgroundColor: '#f1f1f1', minHeight: '100vh' }}>
        <StyledEngineProvider injectFirst>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/store" element={<Store />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </Container>
        </StyledEngineProvider>
      </Box>
    </ShoppingCartProvider>
  );
};

export default App;
