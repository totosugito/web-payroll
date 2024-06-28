import React, {useEffect} from 'react';
import {UiBase} from "../base";
import {DialogProjectEdit, TableProject} from "./component";
import {httpDelete, httpGet, httpPost, httpPut} from "../../io/service/http-api";
import {
  API_PROJECTS_GET,
  getRouterApi,
  API_PROJECT_CREATE,
  API_PROJECT_DELETE, API_PROJECT_UPDATE
} from "../../io/router/apis";
import {Button} from "@nextui-org/react";
import './style.css'
import {DialogQuestion} from "../../view";

const UiProjects = () => {
  const [data, setData] = React.useState([]);
  const [showDialogCreate, setShowDialogCreate] = React.useState(false);
  const [showDialogDelete, setShowDialogDelete] = React.useState(false);
  const [selected, setSelected] = React.useState({});

  const get_data = async () => {
    await httpGet(getRouterApi(API_PROJECTS_GET), {}).then((v) => {
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
      await httpPut(getRouterApi(API_PROJECT_UPDATE, {id: id}), value).then((v) => {
        if (v.isError) {
          console.log(v)
        } else {
          get_data();
        }
      })
    } else {
      await httpPost(getRouterApi(API_PROJECT_CREATE), value).then((v) => {
        if (v.isError) {
          console.log(v)
        } else {
          get_data();
        }
      })
    }
  }

  const onItemDelete = async (value) => {
    await httpDelete(getRouterApi(API_PROJECT_DELETE, {id: value['_id']})).then((v) => {
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
        <span className="titlePage">Projects</span>
        <Button color="primary" size={'sm'} onClick={() => onItemCreate()}>Create project</Button>
      </div>
      <TableProject datas={data} onItemEdit={(v) => onItemEditDialog(v)} onItemDelete={(v) => onItemDeleteDialog(v)}/>
      <DialogProjectEdit value={selected} isOpen={showDialogCreate} onClose={() => setShowDialogCreate(false)} onSubmit={(v) => onItemUpdate(v)}/>
      <DialogQuestion title={"Delete user"} value={selected} isOpen={showDialogDelete} onClose={() => setShowDialogDelete(false)}
                      onSubmit={(v) => onItemDelete(v)}>
        <div>Are you want to delete project <b>{selected['username']}</b> ?</div>
      </DialogQuestion>
    </UiBase>
  );
}
export default UiProjects