// vendor
import React from 'react'

const Title = (props) => {
  return (
    <div className="flex row align-items-end">
      <span className="title">
        {props.title}
      </span>
      <span className="subtitle padding-horizontal-20">
        {props.subtitle}
      </span>
    </div>
  );
}

export default Title;
