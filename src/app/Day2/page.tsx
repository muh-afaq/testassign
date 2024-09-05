"use client";

import React, { useState } from "react";
import { LiaSaveSolid } from "react-icons/lia";
import { LuSendHorizonal } from "react-icons/lu";
import { MdHistory } from "react-icons/md";
import GDA_7 from "@/screen/GDA_7";
import Dashboard from "@/screen/Dashboard";
import SNAP_IV from "@/screen/SNAP_IV";
import PCL_5 from "@/screen/PCL_5";
import Y_BOCS from "@/screen/Y_BOCS";
import AIMS from "@/screen/AIMS";

const Page: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const tabs = [
    "Dashboard",
    "PHQ-9",
    "GAD-7",
    "SNAP-IV",
    "PCL-5",
    "Y-BOCS",
    "AIMS",
    "AUDIT",
    "DAST-10",
    "MOCA",
    "HAM-D",
  ];

  // Function to render content based on selected tab using if-else
  const renderContent = () => {
    if (selectedTab === "GAD-7") {
      return <GDA_7 />;
    }
    // Add more conditions for other tabs and render respective components
    else if (selectedTab === "Dashboard") {
      return <Dashboard />;
    } else if (selectedTab === "SNAP-IV") {
      return <SNAP_IV />;
    } else if (selectedTab === "PCL-5") {
      return <PCL_5 />;
    } else if (selectedTab === "Y-BOCS") {
      return <Y_BOCS />;
    } else if (selectedTab === "AIMS") {
      return <AIMS />;
    } else {
      return (
        <div className="text-gray-500">Select a tab to view its content.</div>
      );
    }
  };

  return (
    <main className="p-4">
      {/* Tabs Header */}
      <div className="flex flex-wrap mb-3 border bg-sky-100">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(tab)}
            className={`cursor-pointer border border-gray-600  px-4 py-2 text-[12px] font-medium ${
              selectedTab === tab
                ? "bg-white text-black"
                : "bg-blue-300 text-black hover:bg-blue-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Header with Checkboxes and Actions */}
      <div className="flex justify-between pb-2 border-b">
        <div className="flex gap-5 text-sm items-center">
          <div className="text-lg font-semibold">{selectedTab}</div>
          <label className="flex items-center gap-1 ">
            <input type="checkbox" className="cursor-pointer" />
            <span>Add to Pre-visit Assessment</span>
          </label>
          <label className="flex items-center gap-1">
            <input type="checkbox" className="cursor-pointer" />
            <span>Add to Note</span>
          </label>
        </div>
        <div className="flex gap-3 text-[12px] items-center">
          <div className="flex items-center gap-2 border p-1 rounded-sm  cursor-pointer">
            <LuSendHorizonal />
            <span>Send to Patient</span>
          </div>
          <div className="flex items-center gap-2 border p-1 rounded-sm cursor-pointer">
            <MdHistory />
            <span>History</span>
          </div>
          <div className="flex items-center gap-2 border p-1 rounded-sm cursor-pointer">
            <LiaSaveSolid />
            <span>Save</span>
          </div>
        </div>
      </div>

      {/* Render the selected tab's content */}
      <div>{renderContent()}</div>
    </main>
  );
};

export default Page;
