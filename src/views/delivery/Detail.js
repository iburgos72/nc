// vendor
import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  const { id } = useParams()

  return (
    <div>
      Detail for: {id}
    </div>
  );
}

export default Detail;
