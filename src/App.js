import './App.css';
import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/Navbar';
import NotFound from './Component/NotFound';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
