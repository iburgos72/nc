// vendor
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// components
import DeliveryView from 'Views/delivery/index.js'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DeliveryView />}>
          <Route path=":id" element={<DeliveryView />}/>
        </Route>
        <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
