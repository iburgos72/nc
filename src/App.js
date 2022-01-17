// vendor
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// components
import MainDeliveryView from 'Views/delivery/Main.js'
import DetailDeliveryView from 'Views/delivery/Detail.js'

// styles
import 'GeneralComponents/styles/default.scss'
import 'GeneralComponents/styles/margin.scss'
import 'GeneralComponents/styles/alignment.scss'
import 'GeneralComponents/styles/general.scss'
import 'GeneralComponents/styles/button-input.scss'

// helpers
import { dummyData } from "Helpers/helpers.js"

const App = () => {
  const [dataApp, setDataApp] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('NuvoCargoData')
    if (data === null) {
      setDataApp(dummyData)
      localStorage.setItem('NuvoCargoData', JSON.stringify(dummyData))
    } else {
      setDataApp(JSON.parse(data))
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"             element={<MainDeliveryView data={dataApp}/>}/>
        <Route path="/shipment/:id"  element={<DetailDeliveryView />}/>
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
