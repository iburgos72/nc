// vendor
import React from 'react';

import './styles/table.scss';

const mapHeader = (header, handleClickHeader, idOrder, tableOrder) => header.map((rowHeader, index_row) => (
  <tr className={`theader `} key={`header-${index_row}`}>
    {rowHeader.map((colHeader, index_col) => {
      let options = {};
      let ordering = null;
      if (colHeader.rowSpan) {
        options.rowSpan = colHeader.rowSpan;
      }
      if (colHeader.colSpan) {
        options.colSpan = colHeader.colSpan;
      }
      if (colHeader.className) {
        options.className = colHeader.className;
      }
      if (colHeader.sortable && !isEmpty(colHeader.id)) {
        options.className = `${!isEmpty(options.className) ? options.className : ''} sortableColumn`
        const indexOfColumn = idOrder.indexOf(colHeader.id);
        options.onClick = () => handleClickHeader({id: colHeader.id, index: indexOfColumn});
        ordering = Arrows(idOrder.includes(colHeader.id) ? tableOrder[indexOfColumn] : '');
      }
      return (
        <th
        key={`row-header-${index_row}-${index_col}`}
        {...options} >
        <span className='GUIM_Title'>{colHeader.text}</span>
        {ordering && (<span className='GUIM_Arrows'>{ordering}</span>)}
      </th>
      );
    })}
    </tr>
));

const Table = props => {
  const { body, headers, head_id } = props;
  return (
    <table className={`GUIMTable ${props.className}`}>
      <thead id={head_id}>
        {mapHeader(headers, props.handleClickHeader, props.idOrder, props.tableOrder)}
      </thead>
      <tbody className={`${props.striped ? "striped" : ""}`}>
        {
          body.map((el, index) => (
            <tr key={`row-${index}`}
            className={`trow ${(props.row_hovered === index) ? 'highlighted' : ''} ${props.row_className}`}
          >
            {el.map((td, i) => <td key={`td-${index}-${i}`}>{td}</td>)}
          </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
