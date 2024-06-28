import {Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {isObjectEmpty} from "../../../lib/my-lib";
import React, {useEffect} from "react";

const DialogUserEdit = ({value, isOpen, onClose, onSubmit}) => {
  const [data, setData] = React.useState(value);
  useEffect(() => {
    setData(value)
  }, [value]);

  const onSubmitClicked = () => {
    onClose();

    let r = {
      fullname: data['fullname'],
      tag: data['tag'],
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
            <ModalHeader className="flex flex-col gap-1">{isObjectEmpty(data) ? "Create" : "Edit"} User</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                // endContent={
                //   <IconMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
                label="Fullname"
                // placeholder="Enter your fullname"
                variant="bordered"
                name={'fullname'}
                onChange={handleInputChange}
                value={data['fullname'] ?? ""}
              />
              <Input
                isRequired
                isDisabled={isEdit()}
                // endContent={
                //   <IconMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
                label="Username"
                // placeholder="Enter your username"
                variant="bordered"
                name={'username'}
                onChange={handleInputChange}
                value={data['username'] ?? ""}
              />
              <Input
                // endContent={
                //   <IconMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
                isRequired
                isDisabled={isEdit()}
                type={'email'}
                label="Email"
                // placeholder="Enter your email"
                variant="bordered"
                name={'email'}
                onChange={handleInputChange}
                value={data['email'] ?? ""}
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
export default DialogUserEdit