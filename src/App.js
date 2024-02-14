
//imports
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//pages
import AuthPage from './pages/Auth';
import NewOrderPage from './pages/NewOrder';
import OrderHistoryPage from './pages/OrderHistory'
//components
import NavBar from './components/Nav'


export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
    { user ?
    <>
    <NavBar />
      <Routes>
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
      </>
      :
      <AuthPage />
    }
  </main>
  );
}

