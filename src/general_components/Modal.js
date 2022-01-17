// vendor
import React from 'react';

// components
import Title from 'GeneralComponents/Title';

// style
import './styles/modal.scss';

const Modal = (props) => {
  return props.show ?
    null
    :
    (
      <div className="modal">
        <div className="modal-main padding-30">
          <Title
            title={props.title}
            subtitle={props.subtitle}
          />
          <span className="form-description">
            {props.description}
          </span>
          {props.children}
        </div>
      </div>
    );
};

export default Modal;
