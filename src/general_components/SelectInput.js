import React from 'react';

const SelectInput = (props) => (
  <div className="flex column margin-vertical-10">
    <div className="flex row justify-content-between">
      <span className="input-description">
        {props.label}
      </span>
    </div>
    <select
      name={props.name}
      onChange={(e) => props.stateFunction(e.target.value)}
    >
      {
        props.options.map((el, idx) => (
          <option value={el} key={idx}>{el}</option>
        ))
      }
    </select>
  </div>
)

export default SelectInput;
