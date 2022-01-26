// vendor
import React, { useEffect, useState } from 'react';
import {
  HashRouter,
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
import {
  droneData,
  dummyData,
} from "Helpers/helpers.js"

// Constants
const NUVOCARGO = 'NuvoCargoData'
const DRONE = 'DroneData'

const App = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={<MainDeliveryView nameData={NUVOCARGO} defaultData={dummyData}/>}
        />
        <Route
          path="/drone"
          element={<MainDeliveryView nameData={DRONE} defaultData={droneData}/>}
        />
        <Route path="/shipment/:id"  element={<DetailDeliveryView />}/>
        <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There is nothing here</p>
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
