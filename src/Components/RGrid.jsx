//import React, {useCallback,useEffect,useState} from 'react';
import React, {useState} from 'react';
import {useEffect} from 'react';
import '../Css/RGrid.css';

const RGrid = props => {
  const [Rows, setRows] = useState([...props.rows]);
  const [Page, setPage] = useState(9999);
  //const [ActualPage, setActualPage] = useState([]);
  //const [Columns, setColumns] = useState([...props.columns]);

  useEffect(() => {
    console.log('Se ejecuto');
  }, [Page]);

  const ddlPages_OnChange = value => {
    setPage(value);
  };

  const Export = value => {
    console.log(value);
  };

  const ChangeId = (jsonvalue,nameid) => {

  };

  const ordenPorDefecto = (datos = [], selector = () => {}, ordenAscendente = false) => {
    const localCompareOptions = {
      sensitivity: 'base',
      ignorePunctuation: true,
    };
    let comparacion = 0;
    return [...datos].sort((a, b) => {
      const claveA = selector(a);
      const claveB = selector(b);
  
      if (typeof claveA !== 'string' && typeof claveA !== 'number') {
        comparacion = 0;
      }
  
      if (typeof claveA === 'string') {
        comparacion = claveA.localeCompare(claveB, undefined, localCompareOptions);
      } else {
        comparacion = claveA - claveB;
      }
  
      return ordenAscendente ? comparacion : comparacion * -1;
    });
  };



  return (
    <div>
      {props.isLoading ? (
        <h2>Loading ...</h2>
      ) : (
        <React.Fragment>
          <span>
            <select
              className="Select"
              name="ddlPages"
              id="ddlPages"
              key="ddlPages"
              onChange={e => ddlPages_OnChange(e.target.value)}
            >
              <option value="9999"> All </option>
              <option value="10"> 10 </option>
              <option value="25"> 25 </option>
              <option value="50"> 50 </option>
              <option value="100"> 100 </option>
            </select>
          </span>
          {props?.Export && (
            <span>
              <button value="csv" className="btn-2" onClick={e => Export(e.target.value)}>
                CSV
              </button>
              <button value="xls" className="btn-2" onClick={e => Export(e.target.value)}>
                Excel
              </button>
              <button value="pdf" className="btn-2" onClick={e => Export(e.target.value)}>
                PDF
              </button>
            </span>
          )}
          <table cellspacing="0" cellpadding="10" width="99%" border="0" align="center">
            <tr className="TrTittle">
              <td className="TdTittle" align="center">
                <a>{props.Tittle}</a>
              </td>
            </tr>
          </table>

          <table className="Table" key="tgrid" width="99%" align="center">
            <thead>
              <tr>
                {props.columns.map((column, idx) => {
                  return (
                    <th className="TableCellBold" width={column.WidthColumn}>
                      {column.Titulo}
                    </th>
                  );
                })}
                {props.ShowDelete && (
                  <th width="5%" className="TableCellBold">
                    Action
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {props.rows.map((row, idx) => {
                if (idx <= Page) {
                  return (
                    <tr>
                      {props.columns.map((column, colx) => {
                        return (
                          <td className="TableCell" width={column.WidthColumn}>
                            {column.Selector(row)}
                          </td>
                        );
                      })}
                      {props.ShowDelete && (
                        <td className="TableCellBold">
                          <button onClick={() => props.DeleteId(row.id)}>Delete</button>
                        </td>
                      )}
                    </tr>
                  );
                }
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={props.columns.length - 1}></td>
              </tr>
            </tfoot>
          </table>
        </React.Fragment>
      )}
    </div>
  );
};

export default RGrid;
