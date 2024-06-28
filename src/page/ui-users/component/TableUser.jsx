import React from 'react';
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@nextui-org/react";
import {createAvatarFromText, formatTextToDateTime} from "../../../lib/my-lib";
import {IconDelete, IconEdit} from "../../../assets/icons/Icons";

const TableUser = ({datas, onItemEdit, onItemDelete}) => {
  return (
    <div className="flex flex-col gap-3 m-1">
      <Table
        isStriped
        // selectionMode="single"
        // color={selectedColor}
        aria-label="Table Users"
        // sortDescriptor={sortedItems.sortDescriptor}
        // onSortChange={sortedItems.sort}
      >
        <TableHeader>
          {/*<TableColumn>#</TableColumn>*/}
          <TableColumn>NAME</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>TAG</TableColumn>
          <TableColumn>UPDATED</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."} items={datas}>
          {(item) => (
            <TableRow key={item['_id']}>
              <TableCell>
                <User
                  avatarProps={{name: createAvatarFromText(item['fullname'])}}
                  description={item['username']}
                  name={item['fullname']}
                />
              </TableCell>
              <TableCell>{item['email']}</TableCell>
              <TableCell>
                <div className={'column-tag'}>
                  {item['tag'].map((v, index) => (
                    <Chip className="capitalize m-0.5" color={'default'} size="sm" key={index}>
                      {v}
                    </Chip>
                  ))}
                </div>
              </TableCell>
              <TableCell>{formatTextToDateTime(item["updatedAt"])}</TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
              {/*    <Tooltip content="Details">*/}
              {/*      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">*/}
              {/*        /!*<EyeIcon/>*!/*/}
              {/*        <Button size={'sm'}>Open</Button>*/}
              {/*      </span>*/}
              {/*    </Tooltip>*/}
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
export default TableUser