import React from "react";
import ReactDOM from "react-dom";

import Handsontable from "handsontable";
// import { Editor } from "@atlaskit/editor-core";
// import { IntlProvider } from 'react-intl-next';
import { Editor } from "@atlaskit/editor-core";

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
    const container = document.createElement('div');
    // container.style.width = '100%';
    // container.style.height = '100%';
    td.appendChild(container);
    
    // Render the Editor Core inside the container
    ReactDOM.render( 
    <Editor />, container);
};
