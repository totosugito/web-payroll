import {Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {isObjectEmpty} from "../../../lib/my-lib";
import React, {useEffect} from "react";

const DialogProjectEdit = ({value, isOpen, onClose, onSubmit}) => {
  const [data, setData] = React.useState(value);
  const [isActive, setIsActive] = React.useState(data['active'] ?? true);

  useEffect(() => {
    setData(value)
    setIsActive(value['active'])
  }, [value]);

  const onSubmitClicked = () => {
    onClose();
    let r = {
      name: data['name'],
      desc: data['desc'],
      tag: data['tag'],
      active: isActive
    }
    if ("_id" in data) {
      r['_id'] = data['_id']
    }
    onSubmit(r);
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    if (name === 'tag') {
      setData((prevValues) => ({
        ...prevValues,
        [name]: value.split(","),
      }));
    }
    else {
      setData((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const isEdit = () => {
    return("_id" in value);
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">{isObjectEmpty(data) ? "Create" : "Edit"} Project</ModalHeader>
            <ModalBody>
              <Input
                isRequired
                autoFocus
                // endContent={
                //   <IconMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
                label="Name"
                // placeholder="Enter your fullname"
                variant="bordered"
                name={'name'}
                onChange={handleInputChange}
                value={data['name'] ?? ""}
              />
              <Input
                // endContent={
                //   <IconMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
                label="Description"
                // placeholder="Enter your username"
                variant="bordered"
                name={'desc'}
                onChange={handleInputChange}
                value={data['desc'] ?? ""}
              />
              <Input
                // endContent={
                //   <IconMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
                label="Tags"
                // placeholder="Enter your tags"
                variant="bordered"
                name={'tag'}
                onChange={handleInputChange}
                value={data['tag'] ?? ""}
              />
              <Checkbox isSelected={isActive} onValueChange={()=>setIsActive(!isActive)}>
                Active
              </Checkbox>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onSubmitClicked}>
                Submit
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}
export default DialogProjectEdit