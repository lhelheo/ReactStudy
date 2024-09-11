"use client";
import { ElementType, Fragment, ReactNode, useState } from "react";
import { Input } from "@/components/raw/input";
import { Table } from "@/components/raw/table";
import { FormatterTypes } from "@/utils/formatters";

export interface MenuTableColumnAction {
  children: ReactNode;
  action: (row: any) => void;
}
export interface MenuTableColumn {
  key?: string;
  label?: string;
  order?: number;
  formatValueAs?: FormatterTypes;
  actions?: MenuTableColumnAction[];
  className?: string;
}
export interface MenuTableItem extends MenuTableColumn {
  extraValue?: string;
}
export interface MenuTableProps {
  tableKey: string;
  columns: MenuTableColumn[];
  data: any[];
  menuItems?: MenuTableItem[];
  onRowClick?: (row: any) => void;
  customChildren?: ElementType;
  customChildrenProps?: any;
  search?: {
    placeholder: string;
    keys: string[];
  };
  color?: "neutral";
}

export const MenuTable = (props: MenuTableProps) => {
  const [openRow, setOpenRow] = useState<MenuTableProps["data"][0] | null>(
    null,
  );
  const [rotateSortIcons, setRotateSortIcons] = useState([]);
  const [sortedBy, setSortedBy] = useState<MenuTableColumn | null>(null);
  const [sortedOrder, setSortedOrder] = useState<"asc" | "desc">("asc");
  const [searchValue, setSearchValue] = useState<string>("");

  let rowsData: any[] = [];

  if (props.search) {
    rowsData = props.data
      .filter((data) =>
        props.search!.keys.some((key) =>
          String(data[key]).toLowerCase().includes(searchValue.toLowerCase()),
        ),
      )
      .sort((a, b) => {
        if (sortedOrder == "asc") {
          return a[sortedBy?.key!] > b[sortedBy?.key!] ? 1 : -1;
        } else {
          return b[sortedBy?.key!] > a[sortedBy?.key!] ? 1 : -1;
        }
      });
  } else {
    rowsData = props.data.sort((a, b) => {
      if (sortedOrder == "asc") {
        return a[sortedBy?.key!] > b[sortedBy?.key!] ? 1 : -1;
      } else {
        return b[sortedBy?.key!] > a[sortedBy?.key!] ? 1 : -1;
      }
    });
  }

  props.columns.forEach((c) => {
    if (c.actions && c.key)
      throw new Error("Column with key and actions not allowed");
  });

  const rowArgs = (row: any) => {
    let res: any = {
      textSize: "text-sm",
    };
    if (props.onRowClick) {
      res.onClick = props.onRowClick;
    }
    return res;
  };

  const toggleMenu = (row: MenuTableProps["data"][0]) => {
    openRow === row ? setOpenRow(null) : setOpenRow(row);
  };

  const toggleAction: MenuTableColumnAction = {
    children: "Maximizar",
    action: (row) => toggleMenu(row),
  };

  const columns = props.columns.map((column, index) => {
    if (index === 0) {
      return {
        actions: column.actions
          ? [toggleAction, ...column.actions]
          : [toggleAction],
      };
    } else {
      return {
        ...column,
      };
    }
  });

  const handleSort = (column: MenuTableColumn, index: number) => {
    if (sortedBy && sortedBy.key === column.key) {
      setSortedOrder(sortedOrder === "asc" ? "desc" : "asc");
    } else {
      setSortedBy(column);
      setSortedOrder("asc");
    }

    setRotateSortIcons((prevState) => {
      const newRotateSortIcons: any = [...prevState];
      newRotateSortIcons[index] = sortedOrder === "asc";
      return newRotateSortIcons;
    });
  };

  const sortedData = sortedBy
    ? rowsData.sort((a, b) => {
      const aValue = a[sortedBy.key!];
      const bValue = b[sortedBy.key!];
      if (sortedOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    })
    : rowsData;

  return (
    <>
      <div className={`${props.search || (sortedBy && "w-full")}`}>
        {props.search && (
          <Input.Text
            id="search"
            name="search"
            color="primary"
            placeholder={props.search.placeholder}
            className="w-full md:w-[400px]"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}
        {sortedBy && (
          <p className="w-max text-sm">
            Ordenando por: {sortedBy?.label} ({sortedOrder})
          </p>
        )}
      </div>
      <div
        className={`w-full mt-4 flex flex-col gap-4 bg-white rounded min-h-[256px] h-auto px-3 py-4`}
      >
        <Table.Container>
          <thead>
            <Table.Row className="text-xs">
              {columns.map((column, index) => (
                <Table.Column
                  className="hover:text-primary cursor-pointer ease-linear transition-all"
                  key={`MenuTableColumn${index}`}
                  onClick={
                    column.key ? () => handleSort(column, index) : undefined
                  }
                >
                  <span className="flex items-center px-1">
                    {column.label}
                    {column.key &&
                      (rotateSortIcons[index] ? (
                        <p>(Decrescente)</p>
                      ) : (
                        <p>(Crescente)</p>
                      ))}
                  </span>
                </Table.Column>
              ))}
            </Table.Row>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <Fragment key={`MenuTableFragment(${index})`}>
                <Table.Row {...rowArgs(row)}>
                  {columns.map((column, columnIndex) => {
                    if (column.actions) {
                      return (
                        <Table.Cell
                          color={props.color}
                          key={`MenuTableCell(${columnIndex})`}
                          formatAs={column.formatValueAs}
                        >
                          <div className="flex items-center gap-2">
                            {column.actions.map((action, actionIndex) => (
                              <p
                                key={`MenuTableCellAction(${actionIndex})`}
                                className="flex cursor-pointer ease-linear transition-all"
                                onClick={() =>
                                  column.actions?.[actionIndex]?.action(row)
                                }
                              >
                                {action.children}
                              </p>
                            ))}
                          </div>
                        </Table.Cell>
                      );
                    } else {
                      return (
                        <Table.Cell
                          color={props.color}
                          key={`MenuTableCell(${columnIndex})`}
                          className={`${props.columns[columnIndex].className}`}
                          formatAs={column.formatValueAs}
                        >
                          {row[column.key!]}
                        </Table.Cell>
                      );
                    }
                  })}
                </Table.Row>
                {openRow === row && (
                  <Table.Row>
                    <Table.Cell
                      colSpan={columns.length}
                      className="p-2"
                      color={props.color}
                    >
                      {props.customChildren && (
                        <>
                          {
                            <props.customChildren
                              data={row}
                              {...props.customChildrenProps}
                            />
                          }
                        </>
                      )}
                    </Table.Cell>
                  </Table.Row>
                )}
              </Fragment>
            ))}
          </tbody>
        </Table.Container>
      </div>
      <p className="text-sm italic pt-4 px-3">Quantidade: {rowsData.length}</p>
    </>
  );
};
