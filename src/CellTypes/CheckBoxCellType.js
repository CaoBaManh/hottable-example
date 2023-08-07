import React from "react";
import ReactDOM from "react-dom";


import Handsontable from "handsontable";
import { Checkbox } from "@atlaskit/checkbox";

export const CheckBoxRenderer = (
  instance,
  td,
  row,
  col,
  prop,
  value,
  cellProperties
) => {
    console.log("lisst",cellProperties.listCheckBox)
    const elementSelected = []
    cellProperties.listCheckBox.forEach(element => {
        console.log("element Select",element.isSelected)
        if(element.isSelected === true) {
            elementSelected.push(element)
        }
    });
    console.log("elementSelect",elementSelected)
    ReactDOM.render(<div>
        {elementSelected.map((element => {
            console.log("aaaaa");
            return (
                <span>{element.label}</span>
            );
        }))}
    </div>,td)

}

export class CheckBoxEditor extends Handsontable.editors.BaseEditor {
    init() {
        this.checkBox = this.hot.rootDocument.createElement('div');
        this.checkBox.classList.add('htCheckBoxEditor');
        this.checkBox.style.display = 'none';
  
      // Attach node to DOM, by appending it to the container holding the table
      this.hot.rootElement.appendChild(this.checkBox);
    }

    getValue() {
        return this.checkBox.value;
      }
      
      setValue(value) {
        console.log("valueChange",value)
        this.checkBox.value = value;
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
  
        const selectStyle = this.checkBox.style;
        console.log("this.select",this.select)
        this._opened = true;
      
        selectStyle.zIndex = 100
        selectStyle.width = `${width}px`;
        selectStyle.top = `${top}px`;
        selectStyle[this.hot.isRtl() ? 'right' : 'left'] = `${start}px`;
        selectStyle.margin = '0px';
        selectStyle.display = '';
        selectStyle.position = 'absolute'
        selectStyle.background = 'white'
        // selectStyle.overflow = 'hidden'
        const {row, col} = this.cellProperties
        
  
        const handleChangeCheckBox =  (event) => {
            console.log("element",event.target.value)
            
            // this.cellProperties.listCheckBox.forEach
        }
       
  
        ReactDOM.render(
          <div style={{border:"1px solid blue"}}>
            {this.cellProperties.listCheckBox.map((element) => {
                return (
                    <Checkbox label={element.label} value={element.value} isChecked={element.isSelected} onChange={handleChangeCheckBox}/>
                )
                
            })}
          </div>
          , this.checkBox)
      }
      
      focus() {
        this.checkBox.focus();
      }
      
      close() {
        this._opened = false;
        this.checkBox.style.display = 'none';
      }
 }
