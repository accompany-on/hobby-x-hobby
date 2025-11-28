import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import SignUp from './components/Signup';
import Login from './components/Login';
import Top from './components/Top';
import './App.css';

function App() {
  return (
    <>
      <h1 className="title">HOBBY✖️HOBBY</h1>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Top />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
