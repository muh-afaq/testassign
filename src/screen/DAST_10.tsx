import React, { useState } from "react";

const DAST_10 = () => {
  const questions = [
    {
      id: 1,
      Question:
        "Have you used durgs other then those required for medical reasion?",
    },
    {
      id: 2,
      Question:
        "Do you abuse more then one durg at a time?",
    },
    {
      id: 3,
      Question:
        "Are you always able to stop using durgs when you want to?(if never use durgs,answer,'yes')",
    },
    {
      id: 4,
      Question:
        "Have you ever had blackouts of flashbacks as a result of durgs use?",
    },
    {
      id: 5,
      Question:
        "Do you ever feel bad or guilt about your durg use?",
    },
    {
      id: 6,
      Question:
        "Have you ever had blackouts of flashbacks as a result of durgs use?",
    },
    {
      id: 7,
      Question:
        "Do you ever feel bad or guilt about your durg use?",
    },
    {
      id: 8,
      Question:
        "Have you ever had blackouts of flashbacks as a result of durgs use?",
    },
    {
      id: 9,
      Question:
        "Do you ever feel bad or guilt about your durg use?",
    },
    {
      id: 10,
      Question:
        "Do you ever feel bad or guilt about your durg use?",
    },
    
  ];

  // State to manage answers
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [totalScore, setTotalScore] = useState(0);

  // Handler for radio button change
  const handleRadioChange = (questionId: number, value: number) => {
    setAnswers((prev) => {
      const newAnswers = { ...prev, [questionId]: value };
      const newTotalScore = Object.values(newAnswers).reduce(
        (acc, curr) => acc + curr,
        0
      );
      setTotalScore(newTotalScore);
      return newAnswers;
    });
  };

  // Function to determine the interpretation color and text based on the total score
  const scoreColor = () => {
    if (totalScore >= 0 && totalScore <= 2) {
      return {
        colorName: "bg-green-100 text-green-800",
        interpretation: "Low Risk",
      };
    } else if (totalScore >= 3 && totalScore <= 5) {
      return {
        colorName: "bg-yellow-100 text-yellow-800",
        interpretation: "Moderate Risk",
      };
    } else if (totalScore >= 6 && totalScore <= 8) {
      return {
        colorName: "bg-orange-100 text-orange-800",
        interpretation: "Substantial Risk",
      };
    } else {
      return {
        colorName: "bg-red-100 text-red-800",
        interpretation: "High Risk",
      };
    }
  };

  const { colorName, interpretation } = scoreColor();

  return (
    <div className="overflow-auto p-4 bg-white rounded-lg shadow-md">
      <table className="w-full text-sm text-left text-gray-500 bg-white rounded-md shadow-sm table-fixed">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left w-2/3 border-r">Question</th>
            <th className="px-4 py-2 text-center w-1/6 border bg-blue-200 text-blue-900 border-gray-800">
              No
            </th>
            <th className="px-4 py-2 text-center w-1/6 border bg-blue-200 text-blue-900 border-gray-800">
              Yes
            </th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 border-r">{question.id} {question.Question}</td>
              <td className="px-4 py-2 text-center border text-blue-900 border-gray-800">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={0}
                  onChange={() => handleRadioChange(index, 0)}
                />
                <span className="ml-2">0</span>
              </td>
              <td className="px-4 py-2 text-center border text-blue-900 border-gray-800">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={1}
                  onChange={() => handleRadioChange(index, 1)}
                />
                <span className="ml-2">+1</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Score Interpretation */}
      <div className="flex justify-between border rounded-md bg-white shadow-md p-2">
        <div className="flex gap-2 items-center">
          <div className="text-sm">Score Interpretation</div>
          <div className="flex items-center text-sm gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border rounded-sm" />
              <span>0-7 Subclinical Range</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-300 border rounded-sm" />
              <span>8-15 Mild</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-300 border rounded-sm" />
              <span>16-23 Moderate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-300 border rounded-sm" />
              <span>24-31 Severe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-300 border rounded-sm" />
              <span>32-40 Extreme</span>
            </div>
          </div>
        </div>
        <div className="flex items-center text-sm gap-2">
          <div
            className={`flex items-center gap-2 rounded-2xl px-4 ${colorName}`}
          >
            <span>Total Score: {totalScore}</span>
          </div>
          <div>{interpretation}</div>
        </div>
      </div>
    </div>
  );
};

export default DAST_10;
