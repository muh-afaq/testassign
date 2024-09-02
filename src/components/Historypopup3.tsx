import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface Question {
  question: string;
  id: number;
}

interface HistoryPopupProps {
  onClose: () => void;
  title: string;
  questions: Question[];
  dates: string[];
}

const Historypopup3: React.FC<HistoryPopupProps> = ({
  title,
  onClose,
  questions,
  dates,
}) => {
  const [activeTab, setActiveTab] = useState<"history" | "view">("history");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  // Calculate total score based on selected answers
  const totalScore = Object.values(answers).reduce(
    (acc, curr) => acc + curr,
    0
  );

  // Handle radio button change and update answers state
  const handleRadioChange = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
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
            <IoClose className="text-lg" />
          </button>
        </div>

        {/* Tabs Section */}
        <div className="mb-4 flex">
          <button
            onClick={() => setActiveTab("history")}
            className={`px-4 py-2 text-sm font-semibold ${
              activeTab === "history"
                ? "text-gray-700 bg-gray-200 border-b-2 border-blue-500"
                : "text-gray-600 border-b-2 border-transparent"
            }`}
          >
            History
          </button>
          <button
            onClick={() => setActiveTab("view")}
            className={`px-4 py-2 text-sm font-semibold ${
              activeTab === "view"
                ? "text-gray-700 bg-gray-200 border-b-2 border-blue-500"
                : "text-gray-600 border-b-2 border-transparent"
            }`}
          >
            View Questionnaires
          </button>
        </div>

        {activeTab === "history" && (
          <>
            {/* Dates Navigation */}

            <div className="mb-4 flex gap-2 overflow-x-auto py-2">
              {dates.map((date, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-[12px] font-semibold text-gray-600 bg-gray-100 rounded-3xl ${
                    selectedDate === date ? "bg-blue-200" : ""
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  {date}
                </button>
              ))}
            </div>
            {/* Questionnaire Table */}
            {selectedDate && (
              <div className="overflow-x-auto w-full max-h-60 overflow-y-auto">
                <table className="min-w-full text-[12px] text-left text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3 w-[40%] px-4 text-left">
                        Over the last two weeks, how often have you been
                        bothered by any of the following problems?
                      </th>
                      <th scope="col" className="py-3 px-4 text-center">
                        Not at all
                      </th>
                      <th scope="col" className="py-3 px-4 text-center">
                        Some days
                      </th>
                      <th scope="col" className="py-3 px-4 text-center">
                        More than half the days
                      </th>
                      <th scope="col" className="py-3 px-4 text-center">
                        Nearly every day
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map((question, index) => (
                      <tr
                        key={question.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="py-4  px-4">
                          {index + 1}. {question.question}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <input
                            type="radio"
                            name={`question${question.id}`}
                            value="0"
                            onChange={() => handleRadioChange(question.id, 0)}
                          />
                          <span className="ml-2">0</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <input
                            type="radio"
                            name={`question${question.id}`}
                            value="1"
                            onChange={() => handleRadioChange(question.id, 1)}
                          />
                          <span className="ml-2">+1</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <input
                            type="radio"
                            name={`question${question.id}`}
                            value="2"
                            onChange={() => handleRadioChange(question.id, 2)}
                          />
                          <span className="ml-2">+2</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <input
                            type="radio"
                            name={`question${question.id}`}
                            value="3"
                            onChange={() => handleRadioChange(question.id, 3)}
                          />
                          <span className="ml-2">+3</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="flex justify-between mt-1">
              <div>Score Calculation</div>
              <div className="flex items-center gap-2 rounded-lg p-1 bg-green-200">
                <span className="text-green-900 text-sm">
                  Total Score {totalScore}
                </span>
              </div>
            </div>

            {/* Score Calculation */}
            <div className="mt-2 p-4 border ">
              <div>Score Interpertaion</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white border " />
                  <div className="text-sm text-gray-600">0-4 No Anxiety</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-300 border " />
                  <div className="text-sm text-gray-600">5-9 Mild Anxiety</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-300 border " />
                  <div className="text-sm text-gray-600">
                    10-14 Moderate Anxiety
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-300 border " />
                  <div className="text-sm text-gray-600">
                    15-21 Severe Anxiety
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Historypopup3;
