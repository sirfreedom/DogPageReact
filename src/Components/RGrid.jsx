//import React, {useCallback,useEffect,useState} from 'react';
import React, {useState} from 'react';
import {useEffect} from 'react';

const RGrid = props => {
  const [Columns, setColumns] = useState(Array.isArray(props?.columns) ? [...props.columns] : []);
  const [Rows, setRows] = useState(Array.isArray(props?.rows) ? [...props.rows] : []);
  const [Page, setPage] = useState([]);
  //const [ActualPage, setActualPage] = useState([]);

  useEffect(() => {}, []);

  function ddlPages_OnChange() {
    setPage(document.getElementById('ddlPages').value);
  }

  return (
    <div>
      {props.estaCargando ? (
        <h1>Carganod</h1>
      ) : (
        <>
          <a>{props.Tittle}</a>
          <span>
            <select name="ddlPages" id="ddlPages" key="ddlPages" onChange={ddlPages_OnChange}>
              <option value="9999"> All </option>
              <option value="10"> 10 </option>
              <option value="25"> 25 </option>
              <option value="50"> 50 </option>
              <option value="100"> 100 </option>
            </select>
          </span>

          <table key="tgrid" width="98%" align="center" border="1">
            <thead>
              <tr>
                {Columns.map((column, idx) => {
                  return <th width={column.WidthColumn}>{column.Titulo}</th>;
                })}
                {props.ShowDelete && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {Rows.map((row, idx) => {
                if (idx <= Page) {
                  return (
                    <tr>
                      {Columns.map((column, colx) => {
                        return <td width={column.WidthColumn}>{column.Selector(row)}</td>;
                      })}
                      {props.ShowDelete && (
                        <td>
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
                <td colSpan={Columns.length - 1}></td>
              </tr>
            </tfoot>
          </table>
        </>
      )}
    </div>
  );
};

export default RGrid;
