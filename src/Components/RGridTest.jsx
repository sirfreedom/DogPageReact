//import React, {useCallback,useEffect,useState} from 'react';
import React, {useState} from 'react';
import {useLayoutEffect} from 'react';
import {useEffect} from 'react';
//import {Row} from 'react-bootstrap';
//import {act} from 'react-dom/cjs/react-dom-test-utils.production.min';
import '../Css/RGrid.css';

const RGridTest = props => {
  const [Rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(9999);
  const [actualPageIndex, setActualPageIndex] = useState(0);

  const ddlPages_OnChange = value => {
    setRowsPerPage(value);
  };

  const Export = value => {
    console.log(value);
  };

  const ChangeId = () => {
    let sText;
    let oComplete;
    try {
      if (props.rows.length == 0) {
        console.log('para la ejecucion por no tener registros.');
        return;
      }
      sText = JSON.stringify(props.rows);
      sText = sText.replace('"' + props.ConfigurationId + '":', '"RowId":');
      oComplete = JSON.parse(sText);
      setRows(oComplete);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    ChangeId();
    console.log('UseEffect');
  }, [Rows]); // no puedo poner rowPageIndex porque cambia y loopea

  useLayoutEffect(() => {
    //console.log('Se ejecutó el useLayoutEffect');
  }, [actualPageIndex, rowsPerPage]);

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
          <table width="99%" border="0" align="center">
            <tr className="TrTittle">
              <td className="TdTittle" align="center">
                <a>{props.Tittle}</a>
              </td>
            </tr>
          </table>

          <table className="Table" key="tgrid" width="99%" align="center">
            <thead key="thead">
              <tr key="trHead">
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
              {Rows.map((row, idx) => {
                if (idx <= rowsPerPage) {
                  return (
                    <tr key={'tr' + idx}>
                      {props.columns.map((column, colx) => {
                        return (
                          <td className="TableCell" width={column.WidthColumn}>
                            {column.Selector(row)}
                          </td>
                        );
                      })}
                      {props.ShowDelete && (
                        <td className="TableCellBold">
                          <button onClick={() => props.DeleteId(row.RowId)}>Delete</button>
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
      <div></div>
    </div>
  );
};

export default RGridTest;
