import React, {useEffect} from 'react';
import {UiBase} from "../base";
import {DialogUserEdit, TableUser} from "./component";
import {httpDelete, httpGet, httpPost, httpPut} from "../../io/service/http-api";
import {API_USER_CREATE, API_USER_DELETE, API_USER_UPDATE, API_USERS_GET, getRouterApi} from "../../io/router/apis";
import {Button} from "@nextui-org/react";
import './style.css'
import {DialogQuestion} from "../../view";

const UiUsers = () => {
  const [data, setData] = React.useState([]);
  const [showDialogCreate, setShowDialogCreate] = React.useState(false);
  const [showDialogDelete, setShowDialogDelete] = React.useState(false);
  const [selected, setSelected] = React.useState({});

  const get_data = async () => {
    await httpGet(getRouterApi(API_USERS_GET), {}).then((v) => {
      if (v.isError) {
        console.log(v)
      } else {
        setData(v.data);
      }
    });
  }

  useEffect(() => {
    get_data().then(r => {
    });
  }, []);

  const onItemUpdate = async (value) => {
    if ("_id" in value) {
      let id = value['_id'];
      delete value['_id']; // delete object key
      await httpPut(getRouterApi(API_USER_UPDATE, {id: id}), value).then((v) => {
        if (v.isError) {
          console.log(v)
        } else {
          get_data();
        }
      })
    } else {
      await httpPost(getRouterApi(API_USER_CREATE), value).then((v) => {
        if (v.isError) {
          console.log(v)
        } else {
          get_data();
        }
      })
    }
  }

  const onItemDelete = async (value) => {
    await httpDelete(getRouterApi(API_USER_DELETE, {id: value['_id']})).then((v) => {
      if (v.isError) {
        console.log(v)
      } else {
        get_data();
      }
    })
  }

  const onItemCreate = () => {
    setSelected({});
    setShowDialogCreate(true);
  }

  const onItemEditDialog = (value) => {
    setSelected((prevState) => ({...prevState, ...value}));
    setShowDialogCreate(true);
  }

  const onItemDeleteDialog = (value) => {
    setSelected((prevState) => ({...prevState, ...value}));
    setShowDialogDelete(true);
  }
  return (
    <UiBase>
      <div className="tableToolbar">
        <span className="titlePage">Users</span>
        <Button color="primary" size={'sm'} onClick={() => onItemCreate()}>Create user</Button>
      </div>
      <TableUser datas={data} onItemEdit={(v) => onItemEditDialog(v)} onItemDelete={(v) => onItemDeleteDialog(v)}/>
      <DialogUserEdit value={selected} isOpen={showDialogCreate} onClose={() => setShowDialogCreate(false)} onSubmit={(v) => onItemUpdate(v)}/>
      <DialogQuestion title={"Delete user"} value={selected} isOpen={showDialogDelete} onClose={() => setShowDialogDelete(false)}
                      onSubmit={(v) => onItemDelete(v)}>
        <div>Are you want to delete user <b>{selected['username']}</b> ?</div>
      </DialogQuestion>
    </UiBase>
  );
}
export default UiUsers