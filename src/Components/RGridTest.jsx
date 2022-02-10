//import React, {useCallback,useEffect,useState} from 'react';
import React, {useState} from 'react';
//import {useLayoutEffect} from 'react';
import {useEffect} from 'react';
//import {Row} from 'react-bootstrap';
//import {act} from 'react-dom/cjs/react-dom-test-utils.production.min';
import '../Css/RGrid.css';

const RGridTest = props => {
  const [Rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [actualPageIndex, setActualPageIndex] = useState(0);

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

  const NextPage = () => {
    let iTotalPages;
    try {
      //Math.ceil(Rows.length / rowsPerPage)
      //(actualPageIndex +1 * rowsPerPage)
      //actualPageIndex + 1
    } catch (e) {
      console.log(e);
    }
  };

  const ChangeId = () => {
    let sText;
    let oComplete;
    try {
      if (props.rows.length == 0) {
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
  }, [props.isLoading]);

  // useLayoutEffect(() => {
  //   //console.log('Se ejecutó el useLayoutEffect');
  // }, [actualPageIndex, rowsPerPage]);

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
          <table width="100%" border="0" align="center">
            <tr className="TrTittle">
              <td className="TdTittle" align="center">
                <a>{props.Tittle}</a>
              </td>
            </tr>
          </table>
          <table className="Table" key="tgrid" width="100%" align="center">
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
                          <a href="#" onclick={() => props.DeleteId(row.RowId)}>
                            <img
                              src="data:image/gif;base64,R0lGODlhEAAQAPMAAP///8bGxoSEhP8AAIQAAP//AAAAhMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAcALAAAAAAQABAAAARc8MhJ5xjnVmzLIBenUeCASCHXIQSlCbCQnmgI3EBJ0CMw4AGEUJDhCACBQQCJYGYmx9uvACgEK9EblXqlHA1gcLUL1VarVlo5DC6ksVu0mywRBO54vFoi7PuFBxEAOw=="
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
                      <a href="#" onclick="">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTEwVDAwOjU3OjE3LTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMi0xMFQwMToxNToyNS0wMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0xMFQwMToxNToyNS0wMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MTYzNjJiMi1hYjIyLWI4NGQtOWYzMC04ZDg2MjIzN2VlNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzE2MzYyYjItYWIyMi1iODRkLTlmMzAtOGQ4NjIyMzdlZTQ3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzE2MzYyYjItYWIyMi1iODRkLTlmMzAtOGQ4NjIyMzdlZTQ3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MTYzNjJiMi1hYjIyLWI4NGQtOWYzMC04ZDg2MjIzN2VlNDciIHN0RXZ0OndoZW49IjIwMjItMDItMTBUMDA6NTc6MTctMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7UgXdWAAAA+0lEQVQ4jaVTK46EQBSs9xqBw+JBQjgJmmOgcAgOgcRyEw6CQCFRkAC1is4wszvTm+mk0un0q+r3qRaS+Gapa2DTNBQRZll2f5HkJzBNUwKgqlJE+Hj/ljjPMwHQ930CIAC2bftZ4DgO9n1vSapKABzHkc+xt8O2bdz3nUVREABFhCLCOI5fiL8KrOvKMAwtWVVZluWf5BcBYwwB8NqHYXhLJnkfozEGAHAcB0QEqg5TflRbloVBENDzPNvAqqrcS7jGl+f5rZQkSdyaeOE8T3ZdZ7O4MnIWuDBNk/XB5YV/CTxb2RhDVXW2ssW+76zrmqrKKIpuAsIvv/MP8/j8LYXK7/IAAAAASUVORK5CYII="
                          title="Next"
                          border="0"
                          width="18px"
                          height="18px"
                        ></img>
                      </a>
                      <input id="txtPage" key="txtPage" value="1"></input>
                      <a href="#" onclick="">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTA5VDIzOjM2OjQ2LTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMi0xMFQwMToxNjo1OS0wMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0xMFQwMToxNjo1OS0wMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZDM5MTQwZS00M2U1LTU1NGMtYTUzZS1lZmRhNjFlMTU5OWYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MmQzOTE0MGUtNDNlNS01NTRjLWE1M2UtZWZkYTYxZTE1OTlmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MmQzOTE0MGUtNDNlNS01NTRjLWE1M2UtZWZkYTYxZTE1OTlmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZDM5MTQwZS00M2U1LTU1NGMtYTUzZS1lZmRhNjFlMTU5OWYiIHN0RXZ0OndoZW49IjIwMjItMDItMDlUMjM6MzY6NDYtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7mNC5OAAAAm0lEQVQ4jaWTMRIEERBF/TmjTOZQ03IHkBO7kvRPtLvYMdtqVf0qlH66+wOS5p9xdHNaawmAANTUHgDn3GcBUER+g0j2YimFxpi3Qgiczgy62/yCnOe5hKzIzDkPEBG5hSxT02ZiWmtPNbLWOkDmMwcArWMqFx5L2GqiJlht48472AqeAUwpbQWTHP6CiTH2zdXZM5fgvVfd/NIFKkfwESP25zAAAAAASUVORK5CYII="
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
      <div></div>
    </div>
  );
};

export default RGridTest;
