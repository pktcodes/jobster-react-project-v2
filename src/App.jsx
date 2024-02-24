import styled from 'styled-components';
import Landing from './pages/Landing';

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 2rem;
`;

const SecondButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 3rem;
`;

function App() {
  return (
    <>
      <Button>Click Me</Button>
      <SecondButton>Click Me</SecondButton>
      <Landing />
    </>
  );
}

export default App;
