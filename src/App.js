import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import LottieBackground from './components/LottieBackground';
import Survey from './components/Survey';
import HierarchyChart from './pages/HierarchyChart';

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Outlet />
      {location.pathname !== '/hierarchy-chart' && <LottieBackground />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Survey />} />
          <Route path="/hierarchy-chart" element={<HierarchyChart />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
