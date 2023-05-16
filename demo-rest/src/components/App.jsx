import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from '../pages/Home';
import Generation from '../pages/Generation';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/generate" element={<Generation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
