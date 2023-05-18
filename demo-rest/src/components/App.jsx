import { Route, Routes } from 'react-router-dom';
import SharedLayout from './shared/SharedLayout';
import Home from '../pages/Home';
import { Heading } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/variant-place"
            element={<Heading>variant-place</Heading>}
          />
          <Route
            path="/income-climate"
            element={<Heading>income-climate</Heading>}
          />
          <Route
            path="/transport-living"
            element={<Heading>transport-living</Heading>}
          />
          <Route path="/wish" element={<Heading>wish</Heading>} />
          <Route path="/result" element={<Heading>result</Heading>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
