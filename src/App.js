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


registerAllModules();

function App() {
  const [isHierachy,setIsHierachy] = useState(false);

const [valueHierachy, setValueHierachy] = useState([]);

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
      checkbox: [{id: 1, label:"Done" , value:"done" , isSelected : true }],
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
        [{id: 2, label:"In progress" , value:"inprogress" , isSelected : true }],
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
      checkbox: [{id: 3, label:"Todo" , value:"todo" , isSelected : false }],
      description : "huhuhhihihihihhuhuhhihih"

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
      image: "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg",
      checkbox: [{id: 3, label:"Todo" , value:"todo" , isSelected : false }],
      description : "huhuhhihihihihhuhuhhihih"

      ,
    },
  ];

  const dataIssue = [
    {
        "issuetype": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/issuetype/10007",
            "id": "10007",
            "description": "Stories track functionality or features expressed as user goals.",
            "iconUrl": "https://dssdevsite.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10300?size=medium",
            "name": "Story",
            "subtask": false,
            "avatarId": 10300,
            "hierarchyLevel": 0
        },
        "key": "TE-1",
        "summary": "sssssss",
        "status": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/status/10006",
            "description": "",
            "iconUrl": "https://dssdevsite.atlassian.net/",
            "name": "To Do",
            "id": "10006",
            "statusCategory": {
                "self": "https://dssdevsite.atlassian.net/rest/api/2/statuscategory/2",
                "id": 2,
                "key": "new",
                "colorName": "blue-gray",
                "name": "To Do"
            }
        },
        "assignee": null,
        "created": "2023-07-07T16:14:37.638+0700",
        "duedate": null,
        "customfield_10020": [
            {
                "id": 2,
                "name": "TE Sprint 1",
                "state": "active",
                "boardId": 3,
                "goal": "",
                "startDate": "2023-07-07T09:15:17.795Z",
                "endDate": "2023-07-21T09:15:00.000Z"
            }
        ],
        "_key": "TE-1",
        "_issuetype": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/issuetype/10007",
            "id": "10007",
            "description": "Stories track functionality or features expressed as user goals.",
            "iconUrl": "https://dssdevsite.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10300?size=medium",
            "name": "Story",
            "subtask": false,
            "avatarId": 10300,
            "hierarchyLevel": 0
        },
        "_status": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/status/10006",
            "description": "",
            "iconUrl": "https://dssdevsite.atlassian.net/",
            "name": "To Do",
            "id": "10006",
            "statusCategory": {
                "self": "https://dssdevsite.atlassian.net/rest/api/2/statuscategory/2",
                "id": 2,
                "key": "new",
                "colorName": "blue-gray",
                "name": "To Do"
            }
        },
        "_projectId": "10002",
        "_simplifiedProject": false,
        "_edit_permission": true,
        "_transition_permission": true,
        "_updated": "2023-07-07T16:14:56.677+0700",
        "_description": null,
        "_environment": null,
        "_customfield_10050": null,
        "_customfield_10040": null,
        "_customfield_10041": null,
        "_customfield_10046": null,
        "_customfield_10038": null,
        "_customfield_10039": null,
        "_customfield_10035": null,
        "_customfield_10037": null,
        "_subtask": false,
        "_parent_type": null,
        "_parent_key": "ROOT"
    },
    {
        "issuetype": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/issuetype/10007",
            "id": "10007",
            "description": "Stories track functionality or features expressed as user goals.",
            "iconUrl": "https://dssdevsite.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10300?size=medium",
            "name": "Story",
            "subtask": false,
            "avatarId": 10300,
            "hierarchyLevel": 0
        },
        "key": "TE-2",
        "summary": "tesst",
        "status": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/status/10007",
            "description": "",
            "iconUrl": "https://dssdevsite.atlassian.net/",
            "name": "Done",
            "id": "10007",
            "statusCategory": {
                "self": "https://dssdevsite.atlassian.net/rest/api/2/statuscategory/3",
                "id": 3,
                "key": "done",
                "colorName": "green",
                "name": "Done"
            }
        },
        "assignee": null,
        "created": "2023-07-07T16:15:47.075+0700",
        "duedate": null,
        "customfield_10020": [
            {
                "id": 1,
                "name": "SSSSSS Sprint 1",
                "state": "active",
                "boardId": 2,
                "goal": "",
                "startDate": "2023-05-30T03:54:34.729Z",
                "endDate": "2023-06-13T03:54:32.000Z"
            }
        ],
        "_key": "TE-2",
        "_issuetype": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/issuetype/10007",
            "id": "10007",
            "description": "Stories track functionality or features expressed as user goals.",
            "iconUrl": "https://dssdevsite.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10300?size=medium",
            "name": "Story",
            "subtask": false,
            "avatarId": 10300,
            "hierarchyLevel": 0
        },
        "_status": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/status/10007",
            "description": "",
            "iconUrl": "https://dssdevsite.atlassian.net/",
            "name": "Done",
            "id": "10007",
            "statusCategory": {
                "self": "https://dssdevsite.atlassian.net/rest/api/2/statuscategory/3",
                "id": 3,
                "key": "done",
                "colorName": "green",
                "name": "Done"
            }
        },
        "_projectId": "10002",
        "_simplifiedProject": false,
        "_edit_permission": true,
        "_transition_permission": true,
        "_updated": "2023-07-21T15:37:43.808+0700",
        "_description": null,
        "_environment": null,
        "_customfield_10050": null,
        "_customfield_10040": null,
        "_customfield_10041": null,
        "_customfield_10046": null,
        "_customfield_10038": null,
        "_customfield_10039": null,
        "_customfield_10035": null,
        "_customfield_10037": null,
        "_subtask": false,
        "_parent_type": null,
        "_parent_key": "ROOT"
    },
    {
        "issuetype": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/issuetype/10000",
            "id": "10000",
            "description": "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
            "iconUrl": "https://dssdevsite.atlassian.net/images/icons/issuetypes/epic.svg",
            "name": "Epic",
            "subtask": false,
            "hierarchyLevel": 1
        },
        "key": "TE-3",
        "summary": "213123",
        "status": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/status/10006",
            "description": "",
            "iconUrl": "https://dssdevsite.atlassian.net/",
            "name": "To Do",
            "id": "10006",
            "statusCategory": {
                "self": "https://dssdevsite.atlassian.net/rest/api/2/statuscategory/2",
                "id": 2,
                "key": "new",
                "colorName": "blue-gray",
                "name": "To Do"
            }
        },
        "assignee": null,
        "created": "2023-07-24T18:47:15.631+0700",
        "duedate": null,
        "customfield_10020": null,
        "_key": "TE-3",
        "_issuetype": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/issuetype/10000",
            "id": "10000",
            "description": "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
            "iconUrl": "https://dssdevsite.atlassian.net/images/icons/issuetypes/epic.svg",
            "name": "Epic",
            "subtask": false,
            "hierarchyLevel": 1
        },
        "_status": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/status/10006",
            "description": "",
            "iconUrl": "https://dssdevsite.atlassian.net/",
            "name": "To Do",
            "id": "10006",
            "statusCategory": {
                "self": "https://dssdevsite.atlassian.net/rest/api/2/statuscategory/2",
                "id": 2,
                "key": "new",
                "colorName": "blue-gray",
                "name": "To Do"
            }
        },
        "_projectId": "10002",
        "_simplifiedProject": false,
        "_edit_permission": true,
        "_transition_permission": true,
        "_updated": "2023-07-24T18:47:16.052+0700",
        "_description": null,
        "_environment": null,
        "_customfield_10050": null,
        "_customfield_10040": null,
        "_customfield_10041": null,
        "_customfield_10046": null,
        "_customfield_10038": null,
        "_customfield_10039": null,
        "_customfield_10035": null,
        "_customfield_10037": null,
        "_subtask": false,
        "_parent_type": null,
        "_parent_key": "ROOT"
    },
    {
        "issuetype": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/issuetype/10010",
            "id": "10010",
            "description": "A small, distinct piece of work.",
            "iconUrl": "https://dssdevsite.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
            "name": "Task",
            "subtask": false,
            "avatarId": 10318,
            "hierarchyLevel": 0
        },
        "key": "TE-4",
        "summary": "12321",
        "status": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/status/10006",
            "description": "",
            "iconUrl": "https://dssdevsite.atlassian.net/",
            "name": "To Do",
            "id": "10006",
            "statusCategory": {
                "self": "https://dssdevsite.atlassian.net/rest/api/2/statuscategory/2",
                "id": 2,
                "key": "new",
                "colorName": "blue-gray",
                "name": "To Do"
            }
        },
        "assignee": null,
        "created": "2023-07-24T18:47:16.593+0700",
        "duedate": null,
        "customfield_10020": null,
        "_key": "TE-4",
        "_issuetype": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/issuetype/10010",
            "id": "10010",
            "description": "A small, distinct piece of work.",
            "iconUrl": "https://dssdevsite.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
            "name": "Task",
            "subtask": false,
            "avatarId": 10318,
            "hierarchyLevel": 0
        },
        "_status": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/status/10006",
            "description": "",
            "iconUrl": "https://dssdevsite.atlassian.net/",
            "name": "To Do",
            "id": "10006",
            "statusCategory": {
                "self": "https://dssdevsite.atlassian.net/rest/api/2/statuscategory/2",
                "id": 2,
                "key": "new",
                "colorName": "blue-gray",
                "name": "To Do"
            }
        },
        "_projectId": "10002",
        "_simplifiedProject": false,
        "_edit_permission": true,
        "_transition_permission": true,
        "_updated": "2023-07-24T18:47:16.849+0700",
        "_description": null,
        "_environment": null,
        "_customfield_10050": null,
        "_customfield_10040": null,
        "_customfield_10041": null,
        "_customfield_10046": null,
        "_customfield_10038": null,
        "_customfield_10039": null,
        "_customfield_10035": null,
        "_customfield_10037": null,
        "_subtask": false,
        "_parent_type": null,
        "_parent_key": "ROOT"
    },
    {
        "issuetype": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/issuetype/10011",
            "id": "10011",
            "description": "A small piece of work that's part of a larger task.",
            "iconUrl": "https://dssdevsite.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10316,
            "hierarchyLevel": -1
        },
        "key": "TE-5",
        "summary": "Sub-task of 12321",
        "status": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/status/10006",
            "description": "",
            "iconUrl": "https://dssdevsite.atlassian.net/",
            "name": "To Do",
            "id": "10006",
            "statusCategory": {
                "self": "https://dssdevsite.atlassian.net/rest/api/2/statuscategory/2",
                "id": 2,
                "key": "new",
                "colorName": "blue-gray",
                "name": "To Do"
            }
        },
        "assignee": null,
        "created": "2023-07-24T18:47:29.161+0700",
        "duedate": null,
        "customfield_10020": null,
        "_key": "TE-5",
        "_issuetype": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/issuetype/10011",
            "id": "10011",
            "description": "A small piece of work that's part of a larger task.",
            "iconUrl": "https://dssdevsite.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10316,
            "hierarchyLevel": -1
        },
        "_status": {
            "self": "https://dssdevsite.atlassian.net/rest/api/2/status/10006",
            "description": "",
            "iconUrl": "https://dssdevsite.atlassian.net/",
            "name": "To Do",
            "id": "10006",
            "statusCategory": {
                "self": "https://dssdevsite.atlassian.net/rest/api/2/statuscategory/2",
                "id": 2,
                "key": "new",
                "colorName": "blue-gray",
                "name": "To Do"
            }
        },
        "_projectId": "10002",
        "_simplifiedProject": false,
        "_edit_permission": true,
        "_transition_permission": true,
        "_updated": "2023-07-24T18:47:29.642+0700",
        "_description": null,
        "_environment": null,
        "_customfield_10050": null,
        "_customfield_10040": null,
        "_customfield_10041": null,
        "_customfield_10046": null,
        "_customfield_10038": null,
        "_customfield_10039": null,
        "_customfield_10035": null,
        "_customfield_10037": null,
        "_subtask": true,
        "_parent_type": null,
        "_parent_key": "TE-4"
    }
]
  // const listStatus = dataIssue.map((item) => )
  const listSelectOPtion = dataSource.map((item) => item.status)
  const listCheckBox = dataSource.map((item) => item.checkbox[0])

  const handleClick = () => {
    const valueHierachyNew = [];
    setIsHierachy(!isHierachy)
  //   const colorObj = {
  //     green: "3",
  //     yellow: "2",
  //     "blue-gray": "1",
  // }
    const newDataList = dataIssue.map((e) => {
      console.log("e",e)
      // return {
      //     ...e,
      //     _statusGroup: colorObj[e.status.statusCategory.colorName] + e.status.statusCategory.colorName + e.status.name,
      // }
  })

  dataIssue.forEach((e,index) => {
    if(e._parent_key === 'ROOT' && e._subtask === false){
        valueHierachyNew.push({
          status:e.status,
          issuetype:e.issuetype,
          hideData : e,
          __children:[]
        })
        
    }else{
      
      const check =  valueHierachyNew.find((v) => v.hideData.key === dataIssue[4]._parent_key)
      if(check) {
        valueHierachyNew.forEach((v) => {
          if(v.hideData.key === check.hideData.key){
            v.__children.push({
              hideDataChild:e,
              status:e.status,
              issuetype:e.issuetype,
              __children:[]
            })
          }
        })

      }
    }
  })
    // newDataList.forEach((e,index) => {
    //   if(index === 0){
    //     valueHierachyNew.push({
    //       status: e.status,
    //       date: e.date,
    //       image: e.image,
    //       checkbox: e.checkbox,
    //       description:e.description,
    //       __children:[{
    //         status: e.status,
    //         date : e.date,
    //         image:e.image,
    //         description : e.description
    //       }]
    //     })
    //     console.log("hahahahhasssss")
    //   }else{
    //     const doubleCheck = valueHierachyNew.find((v) => v.status.name === e.status.name )
    //     if(doubleCheck) {
        
    //       doubleCheck.__children.push({
    //           status:e.status,
    //           date : e.date,
    //           image:e.image,
    //           description : e.description
    //         })
    //     }else{
    //       valueHierachyNew.push({
    //               status: e.status,
    //               date: e.date,
    //               image: e.image,
    //               checkbox: e.checkbox,
    //               description:e.description,
    //               __children:[{
    //                 status: e.status,
    //                 date : e.date,
    //                 image:e.image,
    //                 description : e.description
    //               }]
    //             })
    //     }
    //   }
    // })

    setValueHierachy(valueHierachyNew);
  }

  return (
    <div className="App" style={{margin: '100px' , display:"flex"}}>
      <HotTable
        // data={test}
        rowHeaders={true}
        preventOverflow={"horizontal"}
        contextMenu={true}
        fixedColumnsStart={1}
        data={isHierachy ? valueHierachy : dataIssue}
        colHeaders={["Status", "Date","Image","CheckBox","Description"]}
        colWidths={[120,120,130,120,120]}
        columns={[
          { 
            data:'status',
            editor: StatusEditor,
            renderer: StatusRenderer,
            selectOptions: listSelectOPtion ,
          },
          // {
          //   type: "date",
          //   data: 'created',
          //   defaultDate: "01/01/2023",
          //   dateFormat: "MM/DD/YYYY",
          //   correctFormat: true,
          // },
          {
            data:'issuetype',
            // editor:ImageEditor,
            renderer: ImageRenderer,
            readOnly:true
          },
          // // {
          // //   data:'checkbox',
          // //   renderer : CheckBoxRenderer,
          // //   listCheckBox : listCheckBox,
          // //   editor : CheckBoxEditor
          // // },
          // {
          //   data : "description",
          //   renderer: EditorRenderer , 
          //   editor : EditorCoreFunc
          // }

        ]}
        nestedRows={true}
        plugins={ [Handsontable.plugins.NestedRows]}
        licenseKey="non-commercial-and-evaluation"
      >
      </HotTable>
      <Button onClick={handleClick}>Hierachy</Button>
    </div>
  );
}

export default App;
