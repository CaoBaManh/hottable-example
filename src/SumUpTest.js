// import logo from './logo.svg';
import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.min.css";
import "./App.css";
import React, { useState } from "react";
import { registerAllModules } from "handsontable/registry";
import { StatusRenderer } from "./CellTypes/StatusCellType";
import { StatusEditor } from "./CellTypes/StatusCellType";
import { ImageRenderer } from "./CellTypes/ImageCellType";
import { CheckBoxEditor, CheckBoxRenderer } from "./CellTypes/CheckBoxCellType";
import { EditorCoreFunc, EditorRenderer } from "./CellTypes/EditorCoreCelltype";
import Button from "@atlaskit/button";
import Handsontable from "handsontable";
import { NestedRows } from "handsontable/plugins";
import ReactDOMServer from 'react-dom/server'
import { statusHeaderCellType } from "./HeaderCellTypes/StatusHeaderCellType";


registerAllModules();

function App() {
  const [isHierachy, setIsHierachy] = useState(false);

  const [valueHierachy, setValueHierachy] = useState([]);
  let [isSumUp, setIsSumUp] = useState(false)
  const dataSource = [
    {
      status: {
        self: "https://excel4jira-staging.atlassian.net/rest/api/2/status/10051",
        description: "",
        iconUrl: "https://excel4jira-staging.atlassian.net/",
        name: "Done",
        id: "10051",
        statusCategory: {
          self: "https://excel4jira-staging.atlassian.net/rest/api/2/statuscategory/3",
          id: 3,
          key: "done",
          colorName: "green",
          name: "Done",
        },
      },
      date: "1/04/2023",
      image: "./image.png",
      checkbox: [{ id: 1, label: "Done", value: "done", isSelected: true }],
      description: "No Comment in here"
    },

    {
      status: {
        self: "https://excel4jira-staging.atlassian.net/rest/api/2/status/10050",
        description: "",
        iconUrl: "https://excel4jira-staging.atlassian.net/",
        name: "In Progress edit",
        id: "10050",
        statusCategory: {
          self: "https://excel4jira-staging.atlassian.net/rest/api/2/statuscategory/4",
          id: 4,
          key: "indeterminate",
          colorName: "yellow",
          name: "In Progress",
        },
      },
      date: "02/04/2023",
      image: "./image.png",
      checkbox:
        [{ id: 2, label: "In progress", value: "inprogress", isSelected: true }],
      description: "In Progress no dev "


    },

    {
      status: {
        self: "https://excel4jira-staging.atlassian.net/rest/api/2/status/10049",
        description: "",
        iconUrl: "https://excel4jira-staging.atlassian.net/",
        name: "To Do",
        id: "10049",
        statusCategory: {
          self: "https://excel4jira-staging.atlassian.net/rest/api/2/statuscategory/2",
          id: 2,
          key: "new",
          colorName: "blue-gray",
          name: "To Do",
        },
      },
      date: "03/04/2023",
      image: "./image.png",
      checkbox: [{ id: 3, label: "Todo", value: "todo", isSelected: false }],
      description: "huhuhhihihihihhuhuhhihih"

      ,
    },
    {
      status: {
        self: "https://excel4jira-staging.atlassian.net/rest/api/2/status/10049",
        description: "",
        iconUrl: "https://excel4jira-staging.atlassian.net/",
        name: "To Do",
        id: "10049",
        statusCategory: {
          self: "https://excel4jira-staging.atlassian.net/rest/api/2/statuscategory/2",
          id: 2,
          key: "new",
          colorName: "blue-gray",
          name: "To Do",
        },
      },
      date: "03/04/2023",
      image: "./image.png",
      checkbox: [{ id: 3, label: "Todo", value: "todo", isSelected: false }],
      description: "huhuhhihihihihhuhuhhihih"

      ,
    },
  ];
  const listSelectOPtion = dataSource.map((item) => item.status)

  return (
    <div className="App" style={{ margin: '100px', display: "flex", justifyContent: "" }}>
      <HotTable
        width={"1000px"}
        // data={test}
        rowHeaders={true}
        preventOverflow={"horizontal"}
        contextMenu={true}
        fixedColumnsStart={1}
        data={isHierachy ? valueHierachy : dataSource}
        colWidths={[120, 120, 130, 120, 120]}
        nestedHeaders={isSumUp ? [
          [statusHeaderCellType(dataSource)],
          ["Status"],
        ] : [["Status"]]}
        columns={[
          {
            data: 'status',
            editor: StatusEditor,
            renderer: StatusRenderer,
            selectOptions: listSelectOPtion,
          }
        ]}
        nestedRows={true}
        plugins={[Handsontable.plugins.NestedRows]}
        licenseKey="non-commercial-and-evaluation"
      >
      </HotTable>
      <button onClick={() => setIsSumUp(!isSumUp)}>sumup</button>
    </div>
  );
}

export default App;
