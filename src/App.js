import { Route, Routes } from 'react-router-dom'

// Components
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Login /> } />
      </Routes>
    </div>
  );
};

export default App;
