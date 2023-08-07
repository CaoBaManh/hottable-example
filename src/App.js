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
import { EditorRenderer } from "./CellTypes/EditorCoreCelltype";


registerAllModules();

function App() {
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
      image: "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg",
      checkbox: {label:"Done" , value:"done" , isSelected : true },
      description : "No Comment in here"
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
      image: "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg",
      checkbox: 
        {label:"In progress" , value:"inprogress" , isSelected : true },
        description : "In Progress no dev "
      

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
      image: "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg",
      checkbox: {label:"Todo" , value:"todo" , isSelected : false },
      description : "huhuhhihihihihhuhuhhihih"

      ,
    },
  ];

  const listSelectOPtion = dataSource.map((item) => item.status)
  const listCheckBox = dataSource.map((item) => item.checkbox)


  // const data = [
  //   ["To Do", "1/04/2023"],
  //   ["In Progress", "02/04/2023"],
  //   ["Done", "03/04/2023"],
  // ];

  return (
    <div className="App" style={{margin: '100px'}}>
      <HotTable
        data={dataSource}
        colHeaders={["Status", "Date","Image","CheckBox","Description"]}
        colWidths={[120,120,130,120,120]}
        columns={[
          { 
            data:'status',
            editor: StatusEditor,
            renderer: StatusRenderer,
            selectOptions: listSelectOPtion ,
          },
          {
            type: "date",
            data: 'date',
            defaultDate: "01/01/2023",
            dateFormat: "MM/DD/YYYY",
            correctFormat: true,
          },
          {
            data:'image',
            // editor:ImageEditor,
            renderer: ImageRenderer,
            readOnly:true
          },
          {
            data:'checkbox',
            renderer : CheckBoxRenderer,
            listCheckBox : listCheckBox,
            editor : CheckBoxEditor
          },
          {
            data : "description",
            renderer: EditorRenderer , 
          }

        ]}
        licenseKey="non-commercial-and-evaluation"
      >
      </HotTable>
      
    </div>
  );
}

export default App;
