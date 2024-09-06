import HistoryPopup1 from "@/components/Historypopup1";
import React, { useState } from "react";

const data = [
  { icon: "📄", label: "Sheet View" },
  { icon: "📊", label: "Data View" },
];

const tableData = [
  {
    date_Time: "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    Filled_by: "Provider",
    Total_Score: 25,
    Add_to_Note: "Yes",
  },
  {
    date_Time: "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    Filled_by: "Provider",
    Total_Score: 25,
    Add_to_Note: "No",
  },
  {
    date_Time: "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    Filled_by: "Provider",
    Total_Score: 25,
    Add_to_Note: "No",
  },
  {
    date_Time: "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    Filled_by: "Provider",
    Total_Score: 25,
    Add_to_Note: "No",
  },
  {
    date_Time: "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    Filled_by: "Provider",
    Total_Score: 25,
    Add_to_Note: "No",
  },

  // Additional data rows
];

const PHQ_9 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
      >
        Open History Popup 
      </button>
      {isModalOpen && (
        <HistoryPopup1
          title="Patient Health Questionnaire (PHQ-9)"
          onClose={handleCloseModal}
          data={data}
          tableData={tableData}
        />
      )}
    </div>
  );
};

export default PHQ_9;
