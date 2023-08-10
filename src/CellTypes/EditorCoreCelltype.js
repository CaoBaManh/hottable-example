import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";

import Handsontable from "handsontable";
// import { IntlProvider } from "react-intl-next";
import {
  WithEditorActions,
  EditorContext,
  EditorMigrationComponent as Editor,
} from "@atlaskit/editor-core";
// import { Editor } from "@atlaskit/editor-core";

export const EditorRenderer = (
  instance,
  td,
  row,
  col,
  prop,
  value,
  cellProperties
) => {
  Handsontable.dom.empty(td); // Clear the cell content

  // Create a container element for the Editor Core
  const container = document.createElement("div");
  // container.style.width = '100%';
  // container.style.height = '100%';
  td.appendChild(container);

  // Render the Editor Core inside the container
  ReactDOM.render(
    //  <EditorContext>
    //   <WithEditorActions
    //     render={actions => (
    //       <Editor
    //         appearance="comment"
    //         // onSave={onSubmit(actions)}
    //         // onCancel= {onCancel(actions)}
    //         // defaultValue={signature}
    //       />
    //     )}
    //   />
    // </EditorContext>,
    <span
      style={{
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "inherit",
      }}
    >
      {value}
    </span>,
    container
  );
};

export class EditorCoreFunc extends Handsontable.editors.BaseEditor {
  init() {
    this.editor = this.hot.rootDocument.createElement("div");
    this.editor.classList.add("htEditor");
    this.editor.style.display = "none";

    // Attach node to DOM, by appending it to the container holding the table
    this.hot.rootElement.appendChild(this.editor);
  }

  getValue() {
    return this.instance.getDataAtCell(this.row, this.col);
  }

  setValue(value) {
    console.log("valueChange", value);
    this.editor.value = value;
  }

  open() {
    const { top, start, width, height } = this.getEditedCellRect();
    console.log("EditorChangeValue",this.instance.getDataAtCell(this.row, this.col))
    this.previousValue = this.getValue();
    console.log("previousValue",this.previousValue)
    console.log("top", top);
    console.log("start", start);
    console.log("width", width);
    console.log("height", height);

    const selectStyle = this.editor.style;
    console.log("this.select", this.select);
    this._opened = true;
    // this.editor.style.border = '1px solid black'
    selectStyle.zIndex = 100;
    selectStyle.width = `300px`;
    selectStyle.top = `${top}px`;
    selectStyle[this.hot.isRtl() ? "right" : "left"] = `${start}px`;
    selectStyle.margin = "0px";
    selectStyle.display = "";
    selectStyle.position = "absolute";
    selectStyle.background = "white";
    // selectStyle.overflow = 'hidden'
    const { row, col } = this.cellProperties;
    const defaultValue = {
      version: 1,
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: `${this.previousValue}`,
            },
          ],
        },
      ],
    };
    const handleChangeEditor = (event) => {
      console.log("element", event.target.value);

      // this.cellProperties.listeditor.forEach
    };

    const onCancel = actions => editorView => {
      actions.getValue().then(value => {
        console.log("value",value)
      })
    }
  
    const onSubmit = actions => editorView => {
      console.log("sss",actions.getValue())
    }

    ReactDOM.render(
      <EditorContext>
        <WithEditorActions
          render={(actions) => (
            <div style={{border:'1px solid black'}}>
              <Editor 
              appearance="comment"
              onSave={onSubmit(actions)}
              onCancel= {onCancel(actions)}
              defaultValue={defaultValue}
            />
            </div>
          )}
        />
      </EditorContext>,
      this.editor
    );
  }

  focus() {
    this.editor.focus();
  }

  close() {
    this._opened = false;
    this.editor.style.display = "none";
    unmountComponentAtNode(this.editor)
  }
}
