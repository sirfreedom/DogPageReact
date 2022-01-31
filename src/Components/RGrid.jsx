//import React, {useCallback,useEffect,useState} from 'react';
import React, {useState} from 'react';
import {useEffect} from 'react';

/*
useEffect(() => {
  
}, []);
*/

const RGrid = props => {
  const Columns = [
    {
      Titulo: 'Nombre',
      Selector: fila => fila.Nombre,
      WidthColumn: '20px',
    },
    {
      Titulo: 'Apellido',
      Selector: fila => fila.Apellido,
      WidthColumn: '30%',
    },
  ];

  const Rows = [
    {
      Id: 1,
      Nombre: 'pepe',
      Apellido: 'rodriguez',
    },
    {
      Id: 2,
      Nombre: 'natalia',
      Apellido: 'gomez',
    },
  ];

  //const [Columns,setColumns]
  //const [Rows,setRows] =
  //const [Columns,setColumns] = useState(Array.isArray(props?.columns) ? [...props.columns] : []);
  //const [Rows,setRows] = useState(Array.isArray(props?.data) ? [...props.data] : []);
  const [Pages, setPages] = useState([]);
  const [ActualPage, setActualPage] = useState([]);

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
            <th width="5%"></th>
            {Columns.map((column, idx) => {
              return <th width={column.WidthColumn}>{column.Titulo}</th>;
            })}
            <th width="5%"></th>
          </tr>
        </thead>
        <tbody>
          <td width="5%"></td>
          {Rows.map((row, idx) => {
            return (
              <tr>
                {Columns.map((column, colx) => {
                  return <td width={column.WidthColumn}>{column.Selector(row)}</td>;
                })}
              </tr>
            );
          })}
          <td width="5%"></td>
        </tbody>
        <tfoot>
          <tr>
            <td width="5%"></td>
            <td colSpan={Columns.length - 1}></td>
            <td width="5%"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RGrid;
