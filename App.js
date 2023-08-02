import './App.css';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/Home';
// import Books from './components/Books';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './CRUD/Home';
import Create from './CRUD/Create';
import Update from './Update';
function App() {
  return ( 
      // <Routes>
      //   <Route path='/Home' element={<Home />} ></Route>
      //   <Route path='/Books' element={<Books />} ></Route>
      // </Routes>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/edit/:id' element={<Update />}></Route>
      
    </Routes>
   </BrowserRouter>

      )
}

export default App;
