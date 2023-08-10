import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";


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
    ReactDOM.render(<div className="123123">
        {value.map((element => {
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
        return this.value;
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
        const options = this.cellProperties.listCheckBox
        console.log('options', options);
        console.log('this.hot.getDataAtCell(row, col)', this.hot.getDataAtCell(row, col));
        this.value = this.hot.getDataAtCell(row, col);
        console.log("this.value",this.value)
  
        const handleChangeCheckBox =  (event) => {
            const value = event.target.value;

            const index = this.value.findIndex(item => item.id === +value)
            if (index < 0) {
              this.value.push(this.cellProperties.listCheckBox.find((item) => item.id === +value))
            } else {
              this.value.splice(index, 1);
            }
        }
  
        ReactDOM.render(
          <div style={{border:"1px solid blue"}}>
            {this.cellProperties.listCheckBox.map((element) => {
                if (this.hot.getDataAtCell(row, col).find(item => item.id === element.id)) {
                  console.log("aaâ",element)
                  return (
                      <Checkbox label={element.label} value={element.id} defaultChecked={true} onChange={handleChangeCheckBox}/>
                  )
                }
                
                return <Checkbox label={element.label} value={element.id} defaultChecked={false} onChange={handleChangeCheckBox}/>
                
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
        unmountComponentAtNode(this.checkBox)

      }
 }
