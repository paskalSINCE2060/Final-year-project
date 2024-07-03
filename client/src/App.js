import './App.css';
import { Routes, Route } from 'react-router-dom'
import ConditionalRoutes from './routes/conditionalRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<ConditionalRoutes />} />
      </Routes>
    </>
  );
}

export default App;
