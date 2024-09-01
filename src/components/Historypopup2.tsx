"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,

} from "chart.js";
import { Chart, Plugin, ScriptableContext } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface HistoryPopupProps {
  onClose: () => void;
  title: string;
  data: { icon: string; label: string }[];
  chartData: { date: string; score: number }[];
}

const Historypopup2: React.FC<HistoryPopupProps> = ({
  title,
  onClose,
  data,
  chartData,
}) => {
  const [selectedTab, setSelectedTab] = useState("Data View");
  const [filteredChartData, setFilteredChartData] = useState(chartData);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [range, setRange] = useState(7); // Default to 7 days

  useEffect(() => {
    if (chartData.length === 0) return; // Exit if there's no data

    // Get the latest date from chartData
    const latestDate = new Date(chartData[chartData.length - 1].date);

    // Calculate the start date based on the range
    const startDate = new Date(latestDate);
    startDate.setDate(latestDate.getDate() - range);

    // Filter the chart data based on the calculated start date
    const filteredData = chartData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= latestDate;
    });

    // console.log(filteredData);

    // Update chart data and date range
    setFilteredChartData(filteredData);

    if (filteredData.length > 0) {
      setDateRange({
        start: filteredData[0].date,
        end: filteredData[filteredData.length - 1].date,
      });
    } else {
      setDateRange({ start: "", end: "" }); // Reset if no data is found
    }
  }, [range, chartData]);

  const handleArrowClick = (direction: "back" | "forward") => {
    const currentStart = new Date(dateRange.start);
    const currentEnd = new Date(dateRange.end);

    if (direction === "back") {
      currentStart.setDate(currentStart.getDate() - range);
      currentEnd.setDate(currentEnd.getDate() - range);
    } else {
      currentStart.setDate(currentStart.getDate() + range);
      currentEnd.setDate(currentEnd.getDate() + range);
    }

    const newFilteredData = chartData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= currentStart && itemDate <= currentEnd;
    });

    setFilteredChartData(newFilteredData);
    setDateRange({
      start: currentStart.toISOString().split("T")[0],
      end: currentEnd.toISOString().split("T")[0],
    });
  };

 

  

  // Chart configuration
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Ensure it takes full height/width
    // plugins: [backgroundColorPlugin],
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "PHQ Score",
        },
        min: 0,
        max: 27,
        ticks: {
          stepSize: 2.5,
        },
      },
    },
  };

  const chartDataConfig = {
    labels: filteredChartData.map((item) => item.date),
    datasets: [
      {
        label: "PHQ-9 Scores",
        data: filteredChartData.map((item) => item.score),
        fill: false, // No fill, as we're drawing the background ourselves
        backgroundColor: "rgba(75,192,192,0.2)", // Color for the data points
        borderColor: "rgba(75,192,192,1)", // Line color
        tension: 0.1,
      },
    ],
  };

  const handleRangeClick = (days: number) => {
    setRange(days);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto p-6">
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

        {/* Visit of days */}
        <div className="mb-4 flex gap-2">
          <div
            className={`cursor-pointer px-2 py-1 rounded ${
              range === 7 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleRangeClick(7)}
          >
            7 Days
          </div>
          <div
            className={`cursor-pointer px-2 py-1 rounded ${
              range === 30 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleRangeClick(30)}
          >
            30 Days
          </div>
          <div
            className={`cursor-pointer px-2 py-1 rounded ${
              range === 90 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleRangeClick(90)}
          >
            90 Days
          </div>
        </div>

        {/* Date range and navigation */}
        <div className="mb-4 flex justify-end items-center gap-4 border p-2 rounded">
          <div>{`${dateRange.start} - ${dateRange.end}`}</div>
          <div className="flex items-center gap-2">
            <IoIosArrowBack
              className="cursor-pointer"
              onClick={() => handleArrowClick("back")}
            />
            <IoIosArrowForward
              className="cursor-pointer"
              onClick={() => handleArrowClick("forward")}
            />
          </div>
        </div>

        {/* Chart Display */}
        <div className="h-60 w-full">
          <Line data={chartDataConfig} options={chartOptions} />
        </div>

        {/* Color nodes */}
        <div className="flex text-[12px] justify-center items-center mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white border" />
            <div>Depression</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-300 border" />
            <div>Mid Depression</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-300 border" />
            <div>Moderate Depression</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-300 border" />
            <div>Severe Depression</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historypopup2;
