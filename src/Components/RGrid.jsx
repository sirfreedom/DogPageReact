import '../Css/RGrid.css'
import React, {useCallback, useState, useEffect} from 'react'
import exportFromJSON from 'export-from-json'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import * as lodash from 'lodash'

const RGrid = props => {
  const [Rows, setRows] = useState([]); //rows en general ya ordenadas
  const [rowsPerPage, setRowsPerPage] = useState(10); //rows por pagina
  const [actualPageIndex, setActualPageIndex] = useState(1); //en que pagina estoy
  const [TotalPages, setTotalPages] = useState(0); // manejador de paginas
  const [ColSpanGrid, setColSpanGrid] = useState(1); // seteo si existe las columnas edit y delete
  const [UniqueOrdering,setUniqueOrdering] = useState(false); // necesito ordenar los rows una sola vez.

  const handleExportar = e => {
    const doc = new jsPDF();
    const fileName = (props.Tittle + '_' + new Date().toLocaleString('es-AR'))
      .replace(/[/]/gi, '')
      .replace(/[: ]/g, '');

    const data = Rows.map(fila =>
      props.columns.reduce((prev, columna) => {
        return {...prev, [columna.Tittle]: columna.Selector(fila)};
      }, {})
    );
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
    setRowsPerPage(value);
  };

  const EnabledPaging = () => {
    let b = false;
    b = Rows.length > 0 && Rows.length < 9999 && rowsPerPage < 9999;
    return b;
  };

  const PrevPage = () => {
    let iPage = actualPageIndex;
    if (actualPageIndex > 1) {
      iPage = iPage - 1;
    }
    setActualPageIndex(iPage);
  };

  const NextPage = () => {
    if (actualPageIndex < TotalPages) {
      setActualPageIndex(actualPageIndex + 1);
    }
  };
  
  //Load
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


  Object.prototype.renameProperty = function (oldName, newName) {
    // no hacer nada si los nombre son iguales
    if (oldName === newName) {
      return this;
    }
    // Verificar si ya existe la propiedad con el nombre nuevo y evitar errores.
    if (this.hasOwnProperty(oldName)) {
      this[newName] = this[oldName];
      //delete this[oldName]; // Elimina la columna que cambio, pero decidimos duplicarla.
    }
    return this;
  };

const setColSpan = () => {

  if (props.ShowDelete && props.ShowEdit)
    {
      setColSpanGrid(3);
    }

    if ( (props.ShowDelete === true && props.ShowEdit === false) || (props.ShowDelete === false && props.ShowEdit === true) )
    {
      setColSpanGrid(2);
    }
}

  //necesitamos cambiar el Id por un Id conocido por el control.
  const ChangeId = () => {
    let oComplete;
    try 
    {

      if (props.rows.length === 0 || UniqueOrdering) {
        return;
      }

      setUniqueOrdering(true);
      oComplete = props.rows;

      for (var item of oComplete) {
        item.renameProperty(props.ConfigurationId, 'RowId');
      }

    setRows(lodash.sortBy(oComplete, 'RowId'));
    
    } catch (e)
    {
      console.log(e.message);
    }
  };

  const HandlerOrderby = (value, order) => {
    setRows(lodash.sortBy(Rows, value), order);
  };

  useEffect(() => {

    ChangeId();
    setColSpan();
    
  }, [props.rows]);

  useEffect(() => {
    CalculatePages();
  }, [Rows, rowsPerPage, CalculatePages]);

  return (
    <div >
      {props.isLoading ? (
        <h2>
          <img
            alt="imgLoading"
            className="imgLoading"
            title="Loading..."
            border="0"
            width="30px"
            height="30px"
            key={'kimgLoding' + Math.random().toString() }
          ></img>
        </h2>
      ) : (
        <React.Fragment>
          {props?.Export && (
            <span key={'span' + Math.random().toString()}>
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

          <span align="right">
            <select
              value={rowsPerPage}
              className="Select"
              name="ddlPages"
              id="ddlPages"
              key={'ddlPages' + Math.random().toString() }
              onChange={e => ddlPages_OnChange(e.target.value)}
            >
              <option value="10"> 10 </option>
              <option value="25"> 25 </option>
              <option value="50"> 50 </option>
              <option value="100"> 100 </option>
              <option value="9999"> All </option>
            </select>
          </span>

          <table width={props?.TotalWidth} border="0" align="center" key={'tTittle' + Math.random().toString() } >
            <tr className="TrTittle" key={'trTittle' + Math.random().toString() } >
              <td className="TdTittle" align="center" key={'tdTittle' + Math.random().toString() } >
                <a key={'aTittle' + Math.random().toString() } >{props.Tittle}</a>
              </td>
            </tr>
          </table>

          <table className="Table" key={'tgrid' + Math.random().toString() } width={props?.TotalWidth} align="center">
          
            <thead key={'thead' + Math.random().toString()}>
              <tr key={'trHead' + Math.random().toString() }>
                {props.columns.map((column, idx) => {
                  return (
                    <th className="TableCellBold" width={column.WidthColumn} key={'thHead' + idx }   >
                      {column.Tittle}{' '}
                      {column.Ordenable && (
                          <img
                            alt="imgSortingAsc"
                            className="imgSortingAsc"
                            key={'imgHead' + idx}
                            title="Sort Asc"
                            border="0"
                            width="5px"
                            height="5px"
                            onClick={e => HandlerOrderby(column.ColumnOrdenable, 'asc')}
                          ></img>
                      )}
                    </th>
                  );
                })}

                {props.ShowDelete && (
                  <th width="1%" className="TableCellBold" key={'thActionDelete' + Math.random().toString()}  >
                    Delete
                  </th>
                )}

                {props.ShowEdit && (
                  <th width="1%" className="TableCellBold" key={'thActionEdit' + Math.random().toString()}  >
                    Edit
                  </th>
                )}

                { (props.ShowEdit || props.ShowDelete) && 
                (
                  <th width="1%" colSpan={ColSpanGrid} className="TableCellBold" key={'thActionSpace' + Math.random().toString()} >
                  </th>
                )}

              </tr>
            </thead>

            <tbody key={'tbody' + Math.random().toString() }  >

              {Rows.map((row, idx) => {
                if (
                  idx < actualPageIndex * rowsPerPage + 1 &&
                  idx >= actualPageIndex * rowsPerPage - rowsPerPage
                ) {

                  return (

                    <tr key={'tr1' + Math.random().toString()  }>
                    
                      {props.columns.map((column, colx ) => {
                        return (
                          <td key={'td' + Math.random().toString() + colx.toString() } className="TableCell" width={column.WidthColumn}>
                            {column.Selector(row)}
                          </td>
                        );
                      })}

                      {props.ShowDelete && (
                        <td key={'td_delete' + Math.random().toString()} className="TableCellBold" align="center">
                          <a key={'a_delete' + Math.random().toString()} href="#" onClick={() => props.DeleteId(row.RowId)}>
                            <img
                              alt="imgDelete"
                              className="imgDelete"
                              title="Next"
                              border="0"
                              width="18px"
                              height="18px"
                              key={'imgDelete' + Math.random().toString() }
                            ></img>
                          </a>
                        </td>
                      )}

                    {props.ShowEdit && (
                        <td key={'td_edit' + row.RowId.toString()} className="TableCellBold" align="center">
                          <a key={'a_edit' + row.RowId.toString()} href='/#' onClick={() => props.EditId(row.RowId)}>
                            <img
                              alt="imgEdit"
                              className="imgEdit"
                              title="Next"
                              border="0"
                              width="18px"
                              height="18px"
                              value={row.RowId}
                              key={'imgEdit' + row.RowId.toString() }
                            ></img>
                          </a>
                        </td>
                    )}
                    { (props.ShowEdit || props.ShowDelete ) && (
                      <td width="1%" colSpan={ColSpanGrid} className="TableCellBold" key={'thActionSpace' + Math.random().toString()} >
                      </td>
                    )}
                    </tr>
                  );
                }
              })}
            </tbody>

            <tfoot >
              <tr key={'tr' + Math.random().toString() } >
                <td
                  key={'tdFoot' + Math.random().toString() }
                  align="right"
                  colSpan={props.columns.length + ColSpanGrid }
                  className="TableCellBold"
                >
                  {EnabledPaging && (
                    <div key="DivFooter" className="DivFooter" >
                      <a href="/#" onClick={PrevPage}>
                        <img
                          alt="imgPrev"
                          key={'imgPrev' + Math.random().toString() }
                          className="imgPrev"
                          title="Next"
                          border="0"
                          width="18px"
                          height="18px"
                        ></img>
                      </a>
                      <a>
                        {' '} Page {actualPageIndex} / {TotalPages}{' '}
                      </a>
                      <a href="/#" onClick={NextPage}>
                        <img
                          alt="imgNext"
                          key={'imgNext' + Math.random().toString()}
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

export default RGrid;
