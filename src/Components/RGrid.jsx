//import React, {useCallback,useEffect,useState} from 'react';
import React, {useState} from 'react';
import {useEffect} from 'react';

const RGrid = (props)  => {

const [Columns,setColumns] = useState(Array.isArray(props?.columns) ? [...props.columns] : []);
const [Rows,setRows] = useState(Array.isArray(props?.data) ? [...props.data] : []);
const [Pages,setPages] = useState([]);
const [ActualPage,setActualPage] = useState([]);

return (
    <div>
      <a>
        {props.Tittle}
      </a>
    <span>
    <select name="ddlPages" id="ddlPages" key="ddlPages" >  
        <option value="10"> 10 </option>
        <option value="25"> 25 </option>
        <option value="50"> 50 </option>
        <option value="100"> 100 </option>
    </select>
    </span>
    <table>
        <thead>
        {
        Columns.map((row, idx) => {
            return (
              <tr key={idx}>
                <th>
                    {row.Tittle}                  
                </th>
              </tr>
            );
        })} 
        </thead>
        <tbody>
        {
        Rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>
                    {row.Tittle}                  
                </td>
              </tr>
            );
        })} 
        </tbody>
        <tfoot>
            <tr>
                <td>
                </td>
            </tr>
        </tfoot>
    </table>
    </div>
);


    
  
};

export default RGrid;