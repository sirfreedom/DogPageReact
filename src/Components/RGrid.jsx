//import React, {useCallback,useEffect,useState} from 'react';
import React, {useState} from 'react';
import {useEffect} from 'react';

const RGrid = props => {
  const [Columns, setColumns] = useState(Array.isArray(props?.columns) ? [...props.columns] : []);
  const [Rows, setRows] = useState(Array.isArray(props?.rows) ? [...props.rows] : []);
  const [Pages, setPages] = useState([]);
  const [ActualPage, setActualPage] = useState([]);

  ///useEffect(() => {}, []);



  return (
    <div>
      <a>{props.Tittle}</a>
      <span>
        <select name="ddlPages" id="ddlPages" key="ddlPages">
          <option value="10"> 10 </option>
          <option value="25"> 25 </option>
          <option value="50"> 50 </option>
          <option value="100"> 100 </option>
        </select>



      </span>


      <table width="100%" align="center" border="1">
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
            return (
              <tr>
                {Columns.map((column, colx) => {
                  return <td width={column.WidthColumn}>{column.Selector(row)}</td>;
                })}
                {props.ShowDelete && (
                  <td>
                    <button onClick={() => props.DeleteId(row.Id)}>Delete</button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={Columns.length - 1}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RGrid;
