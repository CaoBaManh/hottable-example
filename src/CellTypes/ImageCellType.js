import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";
import Image from "@atlaskit/image";
import Button from "@atlaskit/button";

export const ImageRenderer = (
  instance,
  td,
  row,
  col,
  prop,
  value,
  cellProperties
) => {
  console.log(prop);
  const ImageComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    console.log("va;ue",value)


    return (
      <div
        
      >
        <Image src={value} alt="Simple example" testId="image" onClick={() => setIsOpen(true)}></Image>
        <ModalTransition>
        {isOpen && (
          <Modal onClose={() => setIsOpen(false)}>
            <ModalHeader>
              <ModalTitle>Image Preview</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Image src={value} alt="Simple example" testId="image"></Image>
            </ModalBody>
            <ModalFooter>
                <Button onClick={() => {
                    console.log("close")
                    setIsOpen(false)
                }}>Close</Button>
            </ModalFooter>
          </Modal>
        )}
        </ModalTransition>
      </div>
    );
  };
  // const temp = document.createElement('div');
  // temp.style.display = 'flex'
  ReactDOM.render(<ImageComponent />, td);
};
