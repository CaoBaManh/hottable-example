import React from "react";
import ReactDOM from "react-dom";
import Handsontable from "handsontable";
import Select from "@atlaskit/select";
// import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Tooltip from "@atlaskit/tooltip";
import Lozenge from "@atlaskit/lozenge";
import '../StatusCellType.css'

export const StatusRenderer = (instance, td, row, col, prop, value, cellProperties) => {
    const temp = document.createElement('div');
    temp.style.display = 'flex'
    if (value.name === "Done") {
      td.style.padding = "4px";
      ReactDOM.render(<Tooltip content = {value.statusCategory.name}>
        <Lozenge appearance="success">{value.statusCategory.name}</Lozenge>
        </Tooltip>,temp)
    }
    if (value.name === "To Do") {
      td.style.padding = "4px";
      ReactDOM.render(<Tooltip content = {value.statusCategory.name}>
        <Lozenge appearance="default">{value.statusCategory.name}</Lozenge>
        </Tooltip>,temp)
    }

    if (value.name === "In Progress edit") {
      td.style.padding = "4px";
      ReactDOM.render(<Tooltip content = {value.statusCategory.name}>
        <Lozenge appearance="inprogress">{value.statusCategory.name}</Lozenge>
        </Tooltip>,temp)
    }
    td.replaceChildren(temp);
}


export class StatusEditor extends Handsontable.editors.BaseEditor {
    init() {
        this.select = this.hot.rootDocument.createElement('div');
        this.select.classList.add('htSelectEditor');
        this.select.style.display = 'none';
  
      // Attach node to DOM, by appending it to the container holding the table
      this.hot.rootElement.appendChild(this.select);
    }
    getValue() {
      return this.select.value;
    }
    
    setValue(value) {
      this.select.value = value;
    }
    
    open() {
      const {
        top,
        start,
        width,
        height,
      } = this.getEditedCellRect();
      console.log("top",top)
      console.log("start",start)
      console.log("width",width)
      console.log("height",height)

      const selectStyle = this.select.style;
      console.log("this.select",this.select)
      this._opened = true;
    
      selectStyle.minHeight = `${height}px`;
      selectStyle.height = `${height}px`;
      selectStyle.width = `${width}px`;
      selectStyle.top = `${top}px`;
      selectStyle[this.hot.isRtl() ? 'right' : 'left'] = `${start}px`;
      selectStyle.margin = '0px';
      selectStyle.display = '';
      // selectStyle.overflow = 'hidden'
      const {row, col} = this.cellProperties
      const options = this.cellProperties.selectOptions.map((option) => {
        return { label: option.statusCategory.name, value: option.statusCategory.id ,hideData : option }
      })
      const defaultValue = options.find((option) => option.value === this.hot.getDataAtCell(row, col).statusCategory.id)
      console.log(defaultValue)

      
      const formatOptionStatus = (option) => {
        return (
          <Lozenge
            appearance={
              option.label === "Done"
                ? "success"
                : option.label === "In Progress"
                ? "inprogress"
                : "default"
            }
          >
            {option.label}
          </Lozenge>
        );
      };

      ReactDOM.render(
        <Select 
            inputId="single-select-example"
            className="single-select custom-select "
            classNamePrefix="react-select"
            formatOptionLabel={formatOptionStatus}
            options={options} 
            autoFocus
            menuIsOpen
            value={defaultValue}
            onChange={(e) => {
                this.setValue(e); 
                this.hot.setDataAtCell(this.row,this.col,this.select.value.hideData)
                this.close();
            }}
        />, this.select)
    }
    
    focus() {
      this.select.focus();
    }
    
    close() {
      this._opened = false;
      this.select.style.display = 'none';
    }
  }