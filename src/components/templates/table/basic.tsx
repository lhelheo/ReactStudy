"use client";
import { Input } from "@/components/raw/input";
import { Tab } from "@/components/raw/tab";
import { Table } from "@/components/raw/table";
import { FormatterTypes } from "@/utils/formatters";
import { cx } from "@/utils/tailwind";
//import { ChevronDownIcon } from "@heroicons/react/20/solid"; //TODO: Change the icon
import { ReactNode, useState } from "react";

export interface BasicTableColumn {
  actions?: {
    children: ReactNode;
    // eslint-disable-next-line no-unused-vars
    onClick: (row: any) => void;
  }[];
  key?: string;
  label?: string;
  formatAs?: FormatterTypes;
  // eslint-disable-next-line no-unused-vars
  customFormat?: (value: any) => ReactNode;
}

interface BasicTableProps {
  key: string;
  columns: BasicTableColumn[];
  data: any[];
  search?: {
    placeholder: string;
    keys: string[];
  };
  tab?: {
    items: { value: string; label: string }[];
    filterKey: string;
    className?: string;
    itemClassName?: string;
  };
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onRowClick?: (row: any) => void;
}

export const BasicTable = (props: BasicTableProps) => {
  // variables
  let rowsData: any[];

  // hooks
  const [sortBy, setSortBy] = useState(props.columns[1]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchValue, setSearchValue] = useState<string>("");
  const [tabFilter, setTabFilter] = useState<string | null>(null);

  // functions
  const handleSort = (data: BasicTableProps["data"]) => {
    if (sortOrder == "asc") {
      return data.sort((a, b) => (a[sortBy.key!] > b[sortBy.key!] ? 1 : -1));
    } else {
      return data.sort((a, b) => (a[sortBy.key!] < b[sortBy.key!] ? 1 : -1));
    }
  };

  const handleSortDescription = (column: BasicTableColumn) => {
    if (sortBy.key == column.key) {
      setSortOrder(sortOrder == "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
    }
  };

  // filter by tab
  if (props.tab && tabFilter) {
    rowsData = props.data.filter((data) =>
      String(data[props.tab!.filterKey])
        .toLowerCase()
        .includes(tabFilter.toLowerCase()),
    );
  } else {
    rowsData = props.data;
  }

  // filter by search
  if (props.search) {
    rowsData = rowsData.filter((data) =>
      props.search!.keys.some((key) =>
        String(data[key]).toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  }

  // sort data
  handleSort(rowsData);

  return (
    <div
      className={cx(
        "w-full h-auto flex flex-col my-2 gap-2 overflow-auto",
        props.className,
      )}
    >
      {props.tab && props.tab.items.length > 0 && (
        <Tab
          color="primary"
          items={props.tab.items}
          className={cx("w-full min-w-0 md:min-w-[400px]", props.tab.className)}
          itemClassName={cx("w-full", props.tab.itemClassName)}
          onTabClick={setTabFilter}
        />
      )}
      <div className="w-full flex flex-wrap gap-4 items-end mt-2 md:mt-0">
        {props.search && (
          <Input.Text
            id={`${props.key} search`}
            name={`${props.key} search`}
            className="w-full lg:w-72"
            size="sm"
            placeholder={props.search.placeholder}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}
        <p className="text-xs text-neutral-600 bg-neutral-200 px-1.5 py-0.5 rounded-[6px]">
          Ordenando por {sortBy.label!.toLowerCase()}
        </p>
      </div>
      <Table.Container>
        <thead>
          <Table.Row>
            {props.columns.map((column, index) => (
              <Table.Column
                key={`BasicTableColumn(${index}): ${column.label} - ${props.key}`}
                onClick={
                  !column.actions
                    ? () => handleSortDescription(column)
                    : undefined
                }
              >
                {column.label || ""}
                {!column.actions && column.key && (
                  <>
                    {/* <ChevronDownIcon //TODO: Set new icon
                    className={`w-[20px] h-[20px] ease-linear transition-all ${
                      sortBy.key == column.key && sortOrder == "asc"
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  /> */}
                    <p>Icon</p>
                  </>
                )}
              </Table.Column>
            ))}
          </Table.Row>
        </thead>
        <tbody>
          {rowsData.map((row, indexRow) => (
            <Table.Row
              key={`BasicTableRow(${indexRow}) - ${props.key}`}
              color="primary"
              onClick={
                props.onRowClick ? () => props.onRowClick!(row) : undefined
              }
            >
              {props.columns.map((column, indexColumn) => (
                <Table.Cell
                  key={`BasicTableCell(${indexColumn}): ${column.label}`}
                  formatAs={column.formatAs}
                  customFormat={column.customFormat}
                >
                  {column.actions && column.actions.length > 0 ? (
                    <span className="flex items-center gap-2">
                      {column.actions.map((action, indexAction) => (
                        <span
                          key={`BasicTableRowAction(${indexAction}) - ${props.key} ${indexRow}`}
                          onClick={() => action.onClick(row)}
                        >
                          {action.children}
                        </span>
                      ))}
                    </span>
                  ) : (
                    row[column.key || ""]
                  )}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </tbody>
      </Table.Container>
    </div>
  );
};
