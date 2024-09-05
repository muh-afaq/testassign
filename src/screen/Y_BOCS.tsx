"use client";
import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
}
interface Heading {
  id: number;
  hQuestion: string;
  tablehead: string[];
}

const Y_BOCS = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const questions: Question[] = [
    { id: 1, question: "Feeling nervous, anxious or on edge" },
    { id: 2, question: "Not being able to stop or control worrying" },
    { id: 3, question: "Worrying too much about different things" },
    { id: 4, question: "Feeling nervous, anxious or on edge" },
    { id: 5, question: "Not being able to stop or control worrying" },
    { id: 6, question: "Worrying too much about different things" },
  ];

  const headers: Heading[] = [
    {
      id: 1,
      hQuestion: "How often have been bothered by any of the following problems?",
      tablehead: [
        "0 hr/day",
        "0-1 hr/day",
        "1-3 hr/day",
        "3-8 hr/day",
        "> 8 hr/day",
      ],
    },
    {
      id: 2,
      hQuestion: "How often have been bothered by any of the following problems?",
      tablehead: [
        "None",
        "Mild",
        "Definite but manageable",
        "Substantial impairment",
        "Incapacitating",
      ],
    },
    {
      id: 3,
      hQuestion: "How often have been problems?",
      tablehead: [
        "None",
        "Little",
        "Definite but manageable",
        "Severe",
        "Near Constant, disabling",
      ],
    },
    {
      id: 4,
      hQuestion: "How much control did you have over your obsessive thought?",
      tablehead: [
        "Complete control",
        "Much control",
        "Some control",
        "Little control",
        "No control",
      ],
    },
    {
      id: 5,
      hQuestion: "How often have been bothered by any of the following problems?",
      tablehead: [
        "None",
        "Mild",
        "Definite but manageable",
        "Substantial impairment",
        "Incapacitating",
      ],
    },
    {
      id: 6,
      hQuestion: "How often have been problems?",
      tablehead: [
        "None",
        "Little",
        "Definite but manageable",
        "Severe",
        "Near Constant, disabling",
      ],
    },
  ];

  const valueLabels = [
    { value: 0, label: "0" },
    { value: 1, label: "+1" },
    { value: 2, label: "+2" },
    { value: 3, label: "+3" },
    { value: 4, label: "+4" },
  ];

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

  const scoreColor = () => {
    if (totalScore >= 0 && totalScore <= 7) {
      return {
        colorName: "bg-white text-gray-700",
        significant: "Subclinical Range",
      };
    }
    if (totalScore >= 8 && totalScore <= 15) {
      return {
        colorName: "bg-green-200 text-green-900",
        significant: "Mild",
      };
    }
    if (totalScore >= 16 && totalScore <= 23) {
      return {
        colorName: "bg-yellow-200 text-yellow-900",
        significant: "Moderate",
      };
    }
    if (totalScore >= 24 && totalScore <= 31) {
      return {
        colorName: "bg-red-600 text-red-900",
        significant: "Severe",
      };
    }
    if (totalScore >= 32 && totalScore <= 40) {
      return {
        colorName: "bg-red-200 text-red-900",
        significant: "Extreme",
      };
    }
    return {
      colorName: "bg-red-200 text-red-900",
      significant: "Extreme",
    };
  };

  const { colorName, significant } = scoreColor();
  return (
    <div className="overflow-auto p-4 bg-white rounded-lg shadow-md">
      <div>
        <div className="p-1">
          <span className="text-black w-full text-sm font-medium">
            How often have been bothered by any of the following problems?
          </span>
        </div>
        {/* Questionnaire Table */}
        <div className="overflow-x-auto mb-6">
          {questions.map((question, index) => (
            <div key={question.id} className="mb-4">
              <table className="w-full text-sm  text-left text-gray-500 bg-white rounded-md mb-2">
                <thead>
                  <tr>
                    <th className="px-4 py-2 w-full bg-gray-100">
                      {headers[index].id} {headers[index].hQuestion}
                    </th>
                    {headers[index].tablehead.map((header, idx) => (
                      <th key={idx} className="px-4 py-2 bg-gray-100 " >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 w-full">{question.question}</td>
                    {valueLabels.map((label) => (
                      <td key={label.value} className="px-4 py-2">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={label.value}
                          onChange={() => handleRadioChange(question.id, label.value)}
                        />
                        <span className="ml-2">{label.label}</span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
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
          <div className={`flex items-center gap-2 rounded-2xl px-4 ${colorName}`}>
            <span>Total Score: {totalScore}</span>
          </div>
          <div>{significant}</div>
        </div>
      </div>
    </div>
  );
};

export default Y_BOCS;
