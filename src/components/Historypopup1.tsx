"use client";

import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";

interface HistoryPopupProps {
  title: string;
  onClose: () => void;
  data: { icon: string; label: string }[];
  tableData: { [key: string]: string | number }[];
}

const HistoryPopup1: React.FC<HistoryPopupProps> = ({
  title,
  onClose,
  data,
  tableData,
}) => {
  const [selectedTab, setSelectedTab] = useState("Sheet View");

  // State to manage checkbox values
  const [checkboxValues, setCheckboxValues] = useState(
    tableData.map((row) => (row["Add_to_Note"] === "Yes" ? true : false))
  );

  // Toggle checkbox and update the respective row value
  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxValues = [...checkboxValues];
    updatedCheckboxValues[index] = !updatedCheckboxValues[index];
    setCheckboxValues(updatedCheckboxValues);

    // Update the tableData to reflect "Yes" or "No"
    tableData[index]["Add_to_Note"] = updatedCheckboxValues[index]
      ? "Yes"
      : "No";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-4xl mx-auto p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <IoClose className=" text-lg" />
          </button>
        </div>

        {/* Tab Section */}
        <div className="mb-4 border-b border-gray-200 flex">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(item.label)}
              className={`${
                selectedTab === item.label
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 border-transparent"
              } flex items-center gap-2 p-2 border-b-2 font-semibold`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {selectedTab === "Sheet View" && (
          <div>
            {/* Table */}
            <div className="overflow-x-auto w-full max-h-80 overflow-y-auto">
              <table className="min-w-full bg-white border-collapse border border-gray-200">
                <thead className="bg-gray-100  text-[12px]">
                  <tr>
                    <th scope="col" className="py-3  px-4 text-left ">
                      <div className="flex justify-between">
                        <div> Date/Time</div>
                        <span className="flex flex-col gap-0">
                          <IoIosArrowUp className="cursor-pointer text-[12px] " />
                          <IoIosArrowDown className="cursor-pointer text-[12px]" />
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="py-3  px-4 text-left ">
                      <div className="flex justify-between">
                        <div> Note</div>
                        <span className="flex flex-col gap-0">
                          <IoIosArrowUp className="cursor-pointer text-[12px] " />
                          <IoIosArrowDown className="cursor-pointer text-[12px]" />
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="py-3  px-4 text-left ">
                      <div className="flex justify-between">
                        <div> Filled by</div>
                        <span className="flex flex-col gap-0">
                          <IoIosArrowUp className="cursor-pointer text-[12px] " />
                          <IoIosArrowDown className="cursor-pointer text-[12px]" />
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="py-3  px-4 text-left  ">
                      <div className="flex justify-between">
                        <div> Total Score</div>
                        <span className="flex flex-col gap-0">
                          <IoIosArrowUp className="cursor-pointer text-[12px] " />
                          <IoIosArrowDown className="cursor-pointer text-[12px]" />
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="py-3 px-4 text-left">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          // checked={checkboxValues[rowIndex]}
                          // onChange={() => handleCheckboxChange(rowIndex)}
                          className="cursor-pointer"
                        />
                        <div> Add to Note</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      {Object.keys(row).map((key, colIndex) => (
                        <td
                          key={colIndex}
                          className="py-2 px-4 border-b border-gray-200 text-gray-700 text-[12px]"
                        >
                          {key === "Total_Score" ? (
                            <div className="flex items-center gap-2">
                              <div className="bg-blue-300 rounded-2xl w-10 flex justify-center text-blue-600 items-center p-1">
                                {row[key]}
                              </div>
                              <FaEye className="text-blue-500" />
                              <div>View</div>
                            </div>
                          ) : key === "Add_to_Note" ? (
                            <div className="flex flex-row gap-2 items-center">
                              <input
                                type="checkbox"
                                checked={checkboxValues[rowIndex]}
                                onChange={() => handleCheckboxChange(rowIndex)}
                                className="cursor-pointer checked:bg-blue-500"
                              />
                              <div>{row[key]}</div>
                            </div>
                          ) : (
                            row[key]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Handle "Data View" if applicable */}
        {selectedTab === "Data View" && (
          <div className="p-4 bg-gray-50 rounded">
            {/* Data View content can go here */}
            <p>Data View content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPopup1;
