import '../Css/RGrid.css';
//import {useLayoutEffect} from 'react';
import React, {useCallback, useState} from 'react';
import {useEffect} from 'react';

//import {useLayoutEffect} from 'react';
//import {Row} from 'react-bootstrap';
//import {act} from 'react-dom/cjs/react-dom-test-utils.production.min';

const RGridTest = props => {
  const [Rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [TotalRows, setTotalRows] = useState(0);
  const [actualPageIndex, setActualPageIndex] = useState(0);
  const [TotalPages, setTotalPages] = useState(0);
  const [counter, setCounter] = useState(0);

  const ddlPages_OnChange = value => {
    try {
      setRowsPerPage(value);
    } catch (e) {
      console.log(e.message);
    }
  };

  const Export = value => {
    console.log(value);
  };

  const EnabledPaging = () => {
    let b = false;
    try {
      b = Rows.length > 0 && Rows.length < 9999 && rowsPerPage < 9999;
    } catch (e) {
      console.log(e);
    }
    return b;
  };

  const PrevPage = () => {
    try {
      if (actualPageIndex > 1) {
        setActualPageIndex(actualPageIndex - 1);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const NextPage = () => {
    try {
      if (actualPageIndex < TotalPages) {
        setActualPageIndex(actualPageIndex + 1);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  // const CreateTotalPages = useCallback(() => {
  //   let iTotal = 0;
  //   console.log('TotalRows:', TotalRows);
  //   try {
  //     if (TotalRows > 0 && TotalRows % rowsPerPage === 0) {
  //       console.log('primer if');
  //       console.log('rowperpage');
  //       console.log(rowsPerPage);
  //       console.log('total rows');
  //       console.log(TotalRows);
  //       console.log('rows leng');
  //       console.log(Rows.length);

  //       iTotal = TotalRows / rowsPerPage;
  //     }
  //     if (TotalRows > 0 && TotalRows % rowsPerPage > 0) {
  //       console.log('segundo if');
  //       iTotal = Math.ceil(Rows.length / rowsPerPage);
  //     }

  //     setTotalPages(iTotal);

  //     console.log('CreateTotalPages Total Pages');
  //     console.log(iTotal);
  //   } catch (e) {
  //     console.log(e.message);
  //     //
  //   }
  // }, [TotalRows]);

  const calcularPaginas = () => {
    if (props.rows.length === 0) {
      return false;
    }

    const cantidadFlias = props.rows.length;
    let iTotal = 0;

    console.log(cantidadFlias);
    if (cantidadFlias % rowsPerPage === 0) {
      console.log('Division perfecta');
      iTotal = Math.ceil(cantidadFlias / rowsPerPage);
    }
    console.log('Division imperfecta');
    iTotal = Math.ceil(cantidadFlias / rowsPerPage);
    console.log(iTotal);
    return iTotal;
  };

  const ChangeId = () => {
    let sText;
    let oComplete;
    try {
      if (props.rows.length === 0) {
        return;
      }
      sText = JSON.stringify(props.rows);
      sText = sText.replace('"' + props.ConfigurationId + '":', '"RowId":');
      oComplete = JSON.parse(sText);
      setRows(oComplete);

      console.log('ChangeId Rows');
      console.log(oComplete.length);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    ChangeId();
    setTotalPages(calcularPaginas());
  }, [props.isLoading, TotalPages]);
  /*
  useLayoutEffect(() => {
    //CreateTotalPages();
  }, [actualPageIndex, rowsPerPage]);
*/

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
              <option value="10"> 10 </option>
              <option value="25"> 25 </option>
              <option value="50"> 50 </option>
              <option value="100"> 100 </option>
              <option value="9999"> All </option>
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
                  <th width="1%" className="TableCellBold">
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
                        <td className="TableCellBold" align="center">
                          <a href="#" onClick={() => props.DeleteId(row.RowId)}>
                            <img
                              className="imgDelete"
                              title="Next"
                              border="0"
                              width="18px"
                              height="18px"
                            ></img>
                          </a>
                        </td>
                      )}
                    </tr>
                  );
                }
              })}
            </tbody>
            <tfoot>
              <tr key="trFoot">
                <td
                  key="tdFoot"
                  align="right"
                  colSpan={props.columns.length + 1}
                  className="TableCellBold"
                >
                  {EnabledPaging() && (
                    <div className="DivFooter">
                      <a href="#" onClick={PrevPage()}>
                        <img
                          className="imgPrev"
                          title="Next"
                          border="0"
                          width="18px"
                          height="18px"
                        ></img>
                      </a>

                      <a>
                        {' '}
                        Page {actualPageIndex + 1} / {TotalPages}{' '}
                      </a>

                      <a href="#" onClick={NextPage()}>
                        <img
                          className="imgNext"
                          title="Next"
                          border="0"
                          width="18px"
                          height="18px"
                        ></img>
                      </a>
                    </div>
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </React.Fragment>
      )}
      <div>
        <button onClick={() => setCounter(prev => prev + 1)}>Mostrar totalRows</button>
      </div>
    </div>
  );
};

export default RGridTest;
