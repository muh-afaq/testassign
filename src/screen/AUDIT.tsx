"use client";
import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: { value: number; label: string }[];
}

const AUDIT = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const questions: Question[] = [
    {
      id: 1,
      question: "How often do you have a drink containing alcohol?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "Monthly or less" },
        { value: 2, label: "2-4 times a month" },
        { value: 3, label: "2-3 times a week" },
        { value: 4, label: "4 or more times a week" },
      ],
    },
    {
      id: 2,
      question:
        "How many drinks containing alcohol do you have on a typical day when you are drinking?",
      options: [
        { value: 0, label: "1-2" },
        { value: 1, label: "3 or 4" },
        { value: 2, label: "5 or 6" },
        { value: 3, label: "7-9" },
        { value: 4, label: "10 or more" },
      ],
    },
    {
      id: 3,
      question: "How often do you have a drink containing alcohol?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "Monthly or less" },
        { value: 2, label: "2-4 times a month" },
        { value: 3, label: "2-3 times a week" },
        { value: 4, label: "4 or more times a week" },
      ],
    },
    {
      id: 4,
      question:
        "How many drinks containing alcohol do you have on a typical day when you are drinking?",
      options: [
        { value: 0, label: "1-2" },
        { value: 1, label: "3 or 4" },
        { value: 2, label: "5 or 6" },
        { value: 3, label: "7-9" },
        { value: 4, label: "10 or more" },
      ],
    },
    {
      id: 5,
      question: "How often do you have a drink containing alcohol?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "Monthly or less" },
        { value: 2, label: "2-4 times a month" },
        { value: 3, label: "2-3 times a week" },
        { value: 4, label: "4 or more times a week" },
      ],
    },
    {
      id: 6,
      question:
        "How many drinks containing alcohol do you have on a typical day when you are drinking?",
      options: [
        { value: 0, label: "1-2" },
        { value: 1, label: "3 or 4" },
        { value: 2, label: "5 or 6" },
        { value: 3, label: "7-9" },
        { value: 4, label: "10 or more" },
      ],
    },
    {
      id: 7,
      question: "How often do you have a drink containing alcohol?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "Monthly or less" },
        { value: 2, label: "2-4 times a month" },
        { value: 3, label: "2-3 times a week" },
        { value: 4, label: "4 or more times a week" },
      ],
    },
    {
      id: 8,
      question:
        "How many drinks containing alcohol do you have on a typical day when you are drinking?",
      options: [
        { value: 0, label: "1-2" },
        { value: 1, label: "3 or 4" },
        { value: 2, label: "5 or 6" },
        { value: 3, label: "7-9" },
        { value: 4, label: "10 or more" },
      ],
    },
    {
      id: 9,
      question: "How often do you have a drink containing alcohol?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "" },
        { value: 2, label: "2-4 times a month" },
        { value: 3, label: "" },
        { value: 4, label: "4 or more times a week" },
      ],
    },
    {
      id: 10,
      question:
        "How many drinks containing alcohol do you have on a typical day when you are drinking?",
      options: [
        { value: 0, label: "1-2" },
        { value: 1, label: "" },
        { value: 2, label: "5 or 6" },
        { value: 3, label: "" },
        { value: 4, label: "10 or more" },
      ],
    },
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
        colorName: "bg-green-100 text-green-800",
        interpretation: "Low Risk Consumption",
      };
    } else if (totalScore >= 8 && totalScore <= 14) {
      return {
        colorName: "bg-yellow-100 text-yellow-800",
        interpretation: "Harmful Alcohol Consumption",
      };
    } else {
      return {
        colorName: "bg-red-100 text-red-800",
        interpretation: "Likelihood of Alcohol Dependence",
      };
    }
  };

  const { colorName, interpretation } = scoreColor();

  return (
    <div className="overflow-auto w-full p-4 bg-white rounded-lg shadow-md">
      {/* Questionnaire Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-[12px] text-left text-gray-500 bg-white shadow-lg rounded-md table-fixed">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left w-2/5 border">Questions</th>
              {Array.from({ length: 5 }, (_, index) => (
                <th key={index} className="px-4 py-2 text-center border w-1/10">
                  {index === 0 ? "0" : `+${index}`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <tr key={question.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 border">{question.question}</td>
                {question.options.map((option, index) => (
                  <td key={index} className="px-4 py-2 text-center border">
                    {option.label === "" ? (
                      <></>
                    ) : (
                      <>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option.value}
                          onChange={() =>
                            handleRadioChange(question.id, option.value)
                          }
                        />
                        <span className="ml-2">{option.label}</span>
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
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

export default AUDIT;
