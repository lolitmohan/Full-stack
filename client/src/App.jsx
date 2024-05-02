
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateForm from './Component/CreateForm';
import Products from './Pages/Products';
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/createForm' element={<CreateForm/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;