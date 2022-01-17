// vendor
import React, { useState } from 'react';

// components
import Title from 'GeneralComponents/Title';

const Form = (props) => {
  const [id, setId] = useState("");
  const [errId, setErrId] = useState("");
  const [technician, setTechnician] = useState("");
  const [errTechnician, setErrTechnician] = useState("");
  const [platform, setPlatform] = useState("");
  const [errPlatform, setErrPlatform] = useState("");
  const [drone, setDrone] = useState("");
  const [errDrone, setErrDrone] = useState("");

  const validateData = () => {
    let errors = false;

    if (id === "") {
      errors = true;
      setErrId("Empty value")
    } else {
      setErrId("")
    }

    if (technician === "") {
      errors = true;
      setErrTechnician("Empty value")
    } else {
      setErrTechnician("")
    }

    if (platform === "") {
      errors = true;
      setErrPlatform("Select a platform")
    } else {
      setErrPlatform("")
    }

    if (drone === "") {
      errors = true;
      setErrDrone("Select a drone")
    } else {
      setErrDrone("")
    }

    if(errors) return;
    console.log('0000000000000000',props);
    props.doneFunc({
        id,
        technician,
        platform,
        drone,
    })
  }

  return (
    <div className="flex column">
      <div className="margin-vertical-30">
        <div className="flex row justify-content-around">
          <div className="flex column margin-vertical-10">
            <div className="flex row justify-content-between">
              <span className="input-description">
                Order ID
              </span>
              {
                errId !== "" &&
                <span className="input-error">
                  {errId}
                </span>
              }
            </div>
            <input
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="flex column margin-vertical-10">
            <div className="flex row justify-content-between">
              <span className="input-description">
                Technician
              </span>
              {
                errTechnician !== "" &&
                <span className="input-error">
                  {errTechnician}
                </span>
              }
            </div>
            <input
              name="technician"
              value={technician}
              onChange={(e) => setTechnician(e.target.value)}
            />
          </div>
        </div>
        <div className="flex row justify-content-around">
          <div className="flex column margin-vertical-10">
            <div className="flex row justify-content-between">
              <span className="input-description">
                Platform
              </span>
              {
                errPlatform !== "" &&
                <span className="input-error">
                  {errPlatform}
                </span>
              }
            </div>
            <input
              name="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            />
          </div>
          <div className="flex column margin-vertical-10">
            <div className="flex row justify-content-between">
              <span className="input-description">
                Drone
              </span>
              {
                errDrone !== "" &&
                <span className="input-error">
                  {errDrone}
                </span>
              }
            </div>
            <input
              name="drone"
              value={drone}
              onChange={(e) => setDrone(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex row justify-content-end">
        <button
          onClick={props.cancelFunc}
          className="margin-horizontal-10"
        >
          Cancel
        </button>
        <button
          onClick={validateData}
          className="margin-horizontal-10 green-button"
        >
          Create new delivery
        </button>
      </div>
    </div>
  );
}

export default Form;
