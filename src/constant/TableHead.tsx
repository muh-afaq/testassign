import React from "react";

interface TableHeadProps {
  headers: string[];
}

const TableHead: React.FC<TableHeadProps> = ({ headers }) => {
  return (
    <thead className="text-xs  text-gray-700 uppercase">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className={`py-3 px-4 ${
              index === 0 ? "w-[40%] text-left" : "text-left"
            }`}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
