const droneData = [
  {
    "Status": "Ready",
    "Order ID": "009-300FCT",
    "Technician": "Ben Santana",
    "Platform": "Gamma",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "008-300FCT",
    "Technician": "Juan Reynosa",
    "Platform": "Gamma",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "007-300FCT",
    "Technician": "Shan Smith",
    "Platform": "Gamma",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "006-300FCT",
    "Technician": "Gerardo Torres",
    "Platform": "Gamma",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "005-300FCT",
    "Technician": "Leonardo Flores",
    "Platform": "Beta",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "004-300FCT",
    "Technician": "Miguel Obregon",
    "Platform": "Beta",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "003-300FCT",
    "Technician": "Mariano Arribas",
    "Platform": "Beta",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "002-300FCT",
    "Technician": "Jessica Salinas",
    "Platform": "Alpha",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "001-300FCT",
    "Technician": "Ernesto Garcia",
    "Platform": "Alpha",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }
];

const dummyData = [
  {
    "Status": "Ready",
    "Order ID": "009-300FCT",
    "Technician": "Ben Santana",
    "Platform": "Gamma",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "008-300FCT",
    "Technician": "Juan Reynosa",
    "Platform": "Gamma",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "007-300FCT",
    "Technician": "Shan Smith",
    "Platform": "Gamma",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "006-300FCT",
    "Technician": "Gerardo Torres",
    "Platform": "Gamma",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "005-300FCT",
    "Technician": "Leonardo Flores",
    "Platform": "Beta",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "004-300FCT",
    "Technician": "Miguel Obregon",
    "Platform": "Beta",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "003-300FCT",
    "Technician": "Mariano Arribas",
    "Platform": "Beta",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "002-300FCT",
    "Technician": "Jessica Salinas",
    "Platform": "Alpha",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }, {
    "Status": "Ready",
    "Order ID": "001-300FCT",
    "Technician": "Ernesto Garcia",
    "Platform": "Alpha",
    "Drone": "DJI-004Q",
    "Technical Check": "Passed",
  }
];

const readOrCreateDataInLocalstorage = (nameDate, storeFunction, dataIfNotExist) => {
  const data = localStorage.getItem(nameDate)
  if (data === null) {
    storeFunction(dataIfNotExist)
    localStorage.setItem(nameDate, JSON.stringify(dummyData))
  } else {
    storeFunction(JSON.parse(data))
  }
}

export {
  readOrCreateDataInLocalstorage,
  dummyData,
  droneData
};
