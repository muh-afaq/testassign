"use client";

import HistoryPopup1 from "@/components/Historypopup1";
import Historypopup2 from "@/components/Historypopup2";
import Historypopup3 from "@/components/Historypopup3";
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
    "Total Score": 25,
    "Add to Note": "Yes",
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

const chartData = [
  { date: "03/25/2024", score: 12.5 },
  { date: "03/26/2024", score: 15.0 },
  { date: "03/27/2024", score: 10.0 },
  { date: "03/28/2024", score: 15.0 },
  { date: "03/29/2024", score: 14.0 },
  { date: "03/30/2024", score: 17.0 },
  { date: "04/01/2024", score: 19.0 },
  { date: "04/02/2024", score: 5.0 },
  { date: "04/03/2024", score: 15.0 },
  { date: "04/04/2024", score: 4.0 },
  { date: "04/05/2024", score: 10.0 },
  { date: "04/06/2024", score: 22.0 },
  { date: "04/07/2024", score: 10.0 },
  { date: "04/08/2024", score: 20.0 },
  { date: "04/09/2024", score: 10.0 },
  { date: "04/10/2024", score: 25.0 },
  // More data points
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };
  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <main className="flex flex-col items-center mt-10">
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
      >
        Open History Popup 1
      </button>

      <button
        onClick={handleOpenModal1}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
      >
        Open History Popup 2
      </button>
      <button
        onClick={handleOpenModal2}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open History Popup 3
      </button>

      {isModalOpen && (
        <HistoryPopup1
          title="Patient Health Questionnaire (PHQ-9)"
          onClose={handleCloseModal}
          data={data}
          tableData={tableData}
        />
      )}
      {isModalOpen1 && (
        <Historypopup2
          title="Patient Health Questionnaire (PHQ-9)"
          onClose={handleCloseModal1}
          data={data}
          chartData={chartData}
        />
      )}
      {isModalOpen2 && (
        <Historypopup3
          title="Patient Health Questionnaire (PHQ-9)"
          onClose={handleCloseModal2}
        />
      )}
    </main>
  );
}
