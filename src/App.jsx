import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Header from './components/Header';
import SingleProduct from './components/SingleProduct';
import Error from './components/Error';


function App() {
  

  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
