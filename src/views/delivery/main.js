// vendor
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// components
import Modal from 'GeneralComponents/Modal';
import Table from 'GeneralComponents/Table';
import Title from 'GeneralComponents/Title';
import Form from './Components/Form'

// images
import userIcon from 'Images/user-icon.png'
import infoDetail from 'Images/info.png'

// helpers
import { readOrCreateDataInLocalstorage } from "Helpers/helpers.js"

// style
import './style/style.scss';

const Main = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(props.data)

  useEffect(() => {
    readOrCreateDataInLocalstorage(props.nameData, setData, props.defaultData)
  }, [])

  const buildBody = () => {
    if (data == null) {
      return [];
    }

    const DETAILS = "DETAILS";
    const ACTIONS = "ACTIONS";
    return data.map(elem => {
      return [...Object.keys(elem), DETAILS, ACTIONS].map(property => {
        switch(property) {
          case DETAILS:
            return (
              <div className="flex justify-content-center align-items-center">
                <Link
                  to={`/shipment/${elem["Order ID"]}`}
                  className="link-white-button flex row justify-content-center align-items-center"
                >
                  <span className="padding-horizontal-10">
                    Details
                  </span>
                  <img src={infoDetail} alt="user-icon" width="18px" height="18px" />
                </Link>
              </div>
            );
          case ACTIONS:
            return (
              <div className="flex justify-content-center align-items-center">
                <select name="actionVal" value={"default"}>
                  <option value="default" disabled hidden>
                    Action
                  </option>
                  {
                    ["Edit", "Delete"].map(elem => (
                      <option value={elem}>{elem}</option>
                    ))
                  }
                </select>
              </div>
            );
          default:
            return (
              <div className="flex column justify-content-center cell">
                <span className="header">
                  {property}
                </span>
                <span className="data">
                  {elem[property]}
                </span>
              </div>
            )
        }
      })
    })
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const insertElement = (dataToInsert) => {
    const newData = [
      {
        "Status": "Ready",
        "Order ID": dataToInsert.id,
        "Technician": dataToInsert.technician,
        "Platform": dataToInsert.platform,
        "Drone": dataToInsert.drone,
        "Technical Check": "Passed",
      },
      ...data,
    ]
    setData(newData);
    localStorage.setItem(props.nameData, JSON.stringify(newData))
  }

  return (
    <div className="padding-30">
      <div className="flex row justify-content-between padding-bottom-50">
        <span className="padding-horizoltal-10 font-logo">
          Dronocargo
        </span>
        <div className="flex row align-items-center">
          <span className="padding-horizontal-10 font-user">
            Ivan Burgos
          </span>
          <img src={userIcon} alt="user-icon" width="18px" height="18px" />
        </div>
      </div>
      <div className="flex row justify-content-between padding-bottom-30">
        <Title
          title="Delivery"
          subtitle="History"
        />
        <div className="flex row align-items-end">
          <input
            className="margin-horizontal-10"
            placeholder="Search"
          />
          <button
            className="green-button"
            onClick={toggleModal}
          >
            New delivery
          </button>
        </div>
      </div>
      <Table
        headers={[]}
        body={buildBody()}
        className="padding-bottom-50"
      />
      <div className="flex row justify-content-between padding-bottom-50">
        <span className="padding-horizoltal-10">
          Powered by NuvoCargo
        </span>
        <span className="padding-horizoltal-10">
          Help
        </span>
      </div>
      <Modal
        title="New delivery"
        description="Please select the order ID and a technician to deploy the cargo. All elements are mandatory."
        show={showModal}
      >
        <Form
          cancelFunc={toggleModal}
          doneFunc={insertElement}
        />
      </Modal>
    </div>
  );
}

export default Main;
