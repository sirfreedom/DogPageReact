import '../Css/RGrid.css';
//import {useLayoutEffect} from 'react';
import React, {useCallback, useState} from 'react';
import {useEffect} from 'react';
import exportFromJSON from 'export-from-json';
import jsPDF from 'jspdf';
import 'jspdf-autotable'

const RGridTest = props => {
  const [Rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [TotalRows, setTotalRows] = useState(0);
  const [actualPageIndex, setActualPageIndex] = useState(1);
  const [TotalPages, setTotalPages] = useState(0);

  const handleExportar = e => {
    const data = Rows.map(fila =>
      props.columns.reduce((prev, columna) => {
        return {...prev, [columna.Tittle]: columna.Selector(fila)};
      }, {})
    );
    const doc = new jsPDF();

    const fileName = (props.Tittle + '_' + new Date().toLocaleString('es-AR'))
      .replace(/[/]/gi, '')
      .replace(/[: ]/g, '');

    switch (e.target.value) {
      case 'csv':
        exportFromJSON({data, fileName, exportType: exportFromJSON.types.csv});
        break;
      case 'xls':
        exportFromJSON({data, fileName, exportType: exportFromJSON.types.xls});
        break;
      case 'pdf':
        doc.autoTable({
          head: [props.columns.map(columna => columna.Tittle)],
          body: Rows.map(fila =>
            props.columns.reduce((prev, columna) => {
              const dato = columna.Selector(fila);
              if (typeof dato !== 'string' && typeof dato !== 'number') {
                return [...prev, ''];
              }
              return [...prev, dato];
            }, [])
          ),
        });
        doc.save(fileName + '.pdf');
        break;
      default:
        break;
    }
  };

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
    let iPage = actualPageIndex;
    try {
      if (actualPageIndex > 1) {
        iPage = iPage - 1;
      }
      setActualPageIndex(iPage);
    } catch (e) {
      console.log(e.message);
    }
  };

  const NextPage = () => {
    console.log('NextPage');
    try {
      if (actualPageIndex < TotalPages) {
        setActualPageIndex(actualPageIndex + 1);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const CalculatePages = useCallback(() => {
    let cantidadFilas = 0;
    let iTotal = 0;

    if (Rows.length === 0) {
      return false;
    }
    cantidadFilas = Rows.length;

    //siempre redondea agregando uno, si sobra.
    iTotal = Math.ceil(cantidadFilas / rowsPerPage);

    setTotalPages(iTotal);
  }, [Rows, rowsPerPage]);

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
      setTotalRows(oComplete.length);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    ChangeId();
  }, [props.rows]);

  useEffect(() => {
    CalculatePages();
  }, [Rows, rowsPerPage, CalculatePages]);

  return (
    <div>
      {props.isLoading ? (
        <h2>
          <img
            className="imgLoading"
            title="Loading..."
            border="0"
            width="30px"
            height="30px"
          ></img>
        </h2>
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
              <button value="csv" className="btn-2" onClick={handleExportar}>
                CSV
              </button>
              <button value="xls" className="btn-2" onClick={handleExportar}>
                Excel
              </button>
              <button value="pdf" className="btn-2" onClick={handleExportar}>
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
                if (
                  idx < actualPageIndex * rowsPerPage + 1 &&
                  idx >= actualPageIndex * rowsPerPage - rowsPerPage
                ) {
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
                      <a href="#" onClick={PrevPage}>
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
                        Page {actualPageIndex} / {TotalPages}{' '}
                      </a>
                      <a href="#" onClick={NextPage}>
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
    </div>
  );
};

export default RGridTest;
