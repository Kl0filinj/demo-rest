import { Route, Routes } from 'react-router-dom';
import SharedLayout from './shared/SharedLayout';
import Home from '../pages/Home';
import VariantPlace from '../pages/VariantPlace';
import IncomeClimate from '../pages/IncomeClimate';
import TransportLiving from '../pages/TransportLiving';
import Wish from '../pages/Wish';
import Result from '../pages/Result';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/variant-place" element={<VariantPlace />} />
          <Route path="/income-climate" element={<IncomeClimate />} />
          <Route path="/transport-living" element={<TransportLiving />} />
          <Route path="/wish" element={<Wish />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
