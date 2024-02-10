// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import Login from './pages/Login';
import Logout from './Logout';
import Register from './pages/Register';

function App() {

  return (
    <Router>
        {/* ... existing code ... */}
        <Routes>

          {/* Admin Dashboard with Pages */}
          <Route path="/admin/*" element={<DashboardRoutes />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />

        </Routes>
    </Router>
  );
}

export default App;
