"use client";

import HistoryPopup1 from "@/components/Historypopup1";
import React, { useState } from "react";

const data = [
  { icon: "📄", label: "Sheet View" },
  { icon: "📊", label: "Data View" },
];

const tableData = [
  {
    "Date/Time": "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    "Filled by": "Provider",
    "Total Score":  25,
    "Add to Note": "Yes",
  },
  {
    "Date/Time": "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    "Filled by": "Patient",
    "Total Score": 25,
    "Add to Note": "No",
  },
  {
    "Date/Time": "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    "Filled by": "Patient",
    "Total Score": 25,
    "Add to Note": "No",
  },
  {
    "Date/Time": "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    "Filled by": "Patient",
    "Total Score": 25,
    "Add to Note": "No",
  },
  {
    "Date/Time": "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    "Filled by": "Patient",
    "Total Score": 25,
    "Add to Note": "No",
  },
  {
    "Date/Time": "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    "Filled by": "Patient",
    "Total Score": 25,
    "Add to Note": "No",
  },
  {
    "Date/Time": "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    "Filled by": "Patient",
    "Total Score": 25,
    "Add to Note": "No",
  },
  {
    "Date/Time": "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    "Filled by": "Patient",
    "Total Score": 25,
    "Add to Note": "No",
  },
  {
    "Date/Time": "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    "Filled by": "Patient",
    "Total Score": 25,
    "Add to Note": "No",
  },
  {
    "Date/Time": "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    "Filled by": "Patient",
    "Total Score": 25,
    "Add to Note": "No",
  },
  {
    "Date/Time": "01-21-24 00:00",
    Note: "Out Pt, New Pt, In-Person",
    "Filled by": "Patient",
    "Total Score": 25,
    "Add to Note": "No",
  },
  // Additional data rows
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex flex-col items-center mt-10">
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open History Popup 1
      </button>

      {isModalOpen && (
        <HistoryPopup1
          title="Patient Health Questionnaire (PHQ-9)"
          onClose={handleCloseModal}
          tabTitle="History"
          data={data}
          tableData={tableData}
        />
      )}
    </main>
  );
}
