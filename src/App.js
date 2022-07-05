import HeaderComponent from './components/HeaderComponent';
import Container from './page-layout/Container';

import './App.css';

export default function App() {
  return (
    <div className="wrapper">
      <Container>
        <HeaderComponent />
      </Container>
    </div>
  );
};
