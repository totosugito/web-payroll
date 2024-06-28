import React from 'react';
import {Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip} from "@nextui-org/react";
import {formatTextToDateTime} from "../../../lib/my-lib";
import './style.css'
import {IconDelete, IconEdit} from "../../../assets/icons/Icons";

const TableProject = ({datas, onItemEdit, onItemDelete}) => {
  const statusColorMap = {
    true: "success",
    false: "danger",
  };

  return (
    <div className="flex flex-col gap-3 m-1">
      <Table
        isStriped
        // selectionMode="single"
        // color={selectedColor}
        aria-label="Table Projects"
        // sortDescriptor={sortedItems.sortDescriptor}
        // onSortChange={sortedItems.sort}
      >
        <TableHeader>
          {/*<TableColumn>#</TableColumn>*/}
          <TableColumn>NAME</TableColumn>
          <TableColumn>TAG</TableColumn>
          <TableColumn>UPDATED</TableColumn>
          <TableColumn className="column-status">STATUS</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."} items={datas}>
          {(item) => (
            <TableRow key={item["_id"]}>
              <TableCell>
                <div className={"text-medium"}>{item["name"]}</div>
                <div className={"text-xs text-gray-400"}>{item["desc"]}</div>
              </TableCell>
              <TableCell>
                <div className={'column-tag'}>
                  {item['tag'].map((v, index) => (
                    <Chip className="capitalize m-0.5" color={'default'} size="sm" key={index}>
                      {v}
                    </Chip>
                  ))}
                </div>
              </TableCell>
              <TableCell className="column-updated">{formatTextToDateTime(item["updatedAt"])}</TableCell>
              <TableCell>
                <Chip className="capitalize border-none" color={statusColorMap[item['active']]} size="md" variant="dot">
                  {item["active"] === true ? "Active" : "Inactive"}
                </Chip>
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Edit user">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => onItemEdit(item)}>
                      <IconEdit/>
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Delete user">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => onItemDelete(item)}>
                      <IconDelete/>
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
export default TableProject