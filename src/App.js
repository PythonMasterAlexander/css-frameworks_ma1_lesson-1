import React from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import PageHeader from './components/PageHeader';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

const Wrapper = styled.div``;
const BodyContainer = styled.div`
  margin: 0; 
  padding: 0;
`;


function App() {
  return (
    <React.Fragment>
      <Wrapper>
        <BodyContainer>
          <PageHeader />
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Contact" element={<Contact />} />
              <Route element={<NoMatch />} />
            </Routes>
          </Router>
        </BodyContainer>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
