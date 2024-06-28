import {TreeTable, TreeState, TreeNode, Row} from "cp-react-tree-table";
import {useEffect, useRef, useState} from "react";
import './style-treetable.css'
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {LTT} from "../../../lib";
import {IconActivity} from "../../../assets";

const TreeTableDemo = () => {
  const data = [
    {
      itemId: 1,
      parentId: 0,
      data: {itemId: 1, parentId: 0, title: "Pengadaan Komputer", budget: "60,000", expenses: "0"},
    },
    {
      itemId: 2,
      parentId: 0,
      data: {itemId: 2, parentId: 0, title: "Survey BI 2024", budget: "70,000", expenses: "0"},
    },
    {
      itemId: 3,
      parentId: 2,
      data: {itemId: 3, parentId: 2, title: "ChatGPT command prompt 2023", budget: "50,000", expenses: "10,000"},
    },
  ];
  const [tmpData, setTmpData] = useState(data);
  const [treeState, setTreeState] = useState(TreeState.create([]));
  const treeTableRef = useRef(null);

  useEffect(() => {
    const tmp_ = dataToTree(data);
    setTreeState(TreeState.create(tmp_));
  }, []);

  const dataToTree = (items) => {
    let ltt = new LTT(items, {
      key_id: 'itemId',
      key_parent: 'parentId',
      key_child: 'children'
    });
    let tree = ltt.GetTree();
    return (tree);
  }

  const renderHeaderCell = (name, alignLeft = true) => {
    return () => {
      return (
        <span className={alignLeft ? "align-left" : "align-right"}>{name}</span>
      );
    }
  }

  const updateTreeItem = (item_) => {
    const tmp_ = [...tmpData]
    tmp_.push(item_)
    let treeItems_ = dataToTree(tmp_);
    setTreeState(TreeState.create(treeItems_));
    setTreeState((prev) => TreeState.expandAll(prev));
    setTmpData(tmp_);
  }

  const treeItemInsertAbove = (item) => {
    console.log(item)
  }
  const treeItemInsertBelow = (item) => {
    let id_ = Math.floor(Math.random() * 1e+6);
    let item_ = {
      itemId: id_,
      parentId: item.parentId,
      data: {itemId: id_, parentId: item.parentId, title: "Item", budget: "0", expenses: "0"}
    }
    updateTreeItem(item_);
  }
  const treeChildAdd = (item) => {
    let id_ = Math.floor(Math.random() * 1e+6);
    let item_ = {
      itemId: id_,
      parentId: item.itemId,
      data: {itemId: id_, parentId: item.itemId, title: "child", budget: "0", expenses: "0"}
    }
    updateTreeItem(item_);
  }
  const treeItemDelete = (item) => {
    console.log(item)
  }

  const renderIndexCell = (row) => {
    return (
      <div style={{paddingLeft: (row.metadata.depth * 15) + "px"}}>
        <button className={`toggle-button ${row.$state.isExpanded ? "expanded" : ""}`}
                onClick={row.toggleChildren}
                disabled={!row.metadata.hasChildren}>
          <>
            <span className={""}>{row.data.title}</span>
            <Dropdown>
              <DropdownTrigger>
              <span className={"ml-2"}>
                <IconActivity className="text-secondary inline" fill="currentColor" size={18}/>
              </span>
              </DropdownTrigger>
              <DropdownMenu aria-label="Action event example">
                <DropdownItem onClick={() => treeItemInsertAbove(row.data)}>Insert item above</DropdownItem>
                <DropdownItem onClick={() => treeItemInsertBelow(row.data)}>Insert item below</DropdownItem>
                <DropdownItem key="text" onClick={() => treeChildAdd(row.data)}>Add child</DropdownItem>
                <DropdownItem className="text-danger" color="danger" onClick={() => treeItemDelete(row.data)}>
                  Delete item
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        </button>
      </div>
    );
  }

  const renderEmployeesCell = (row) => {
    return (
      <span className="budget-cell">{row.data.budget}</span>
    );
  }

  const renderExpensesCell = (row) => {
    return (
      <span className="expenses-cell">{row.data.expenses}</span>
    );
  }

  return (
    <>
      <TreeTable className="cp_tree-table"
                 height={360}
                 headerHeight={32}
                 ref={treeTableRef}
                 value={treeState}
                 onChange={(newVal) => {
                   setTreeState(newVal);
                 }}
      >
        <TreeTable.Column renderCell={renderIndexCell} renderHeaderCell={renderHeaderCell("Item")} grow={1}/>
        <TreeTable.Column renderCell={renderEmployeesCell} renderHeaderCell={renderHeaderCell("Budget (Rp)", false)} basis="100px"/>
        <TreeTable.Column renderCell={renderExpensesCell} renderHeaderCell={renderHeaderCell("Expenses (Rp)", false)} basis="100px"/>
      </TreeTable>
    </>
  );
}
export default TreeTableDemo