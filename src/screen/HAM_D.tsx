"use client";
import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: { value: number; label: string }[];
}

const HAM_D = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const questions: Question[] = [
    {
      id: 1,
      question: "DEPRESSED MOOD (sadness,hopless,helpless,worthles)",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Ideas of guilt" },
        { value: 2, label: "Frequent weeping" },
        { value: 3, label: "Sadness" },
        { value: 4, label: "Exterem symptions" },
      ],
    },
    {
      id: 2,
      question:
        "FEELING OF GUILT",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Occasional" },
        { value: 2, label: "Frequent" },
        { value: 3, label: "Interview difficult" },
        { value: 4, label: "Fear" },
      ],
    },
    {
      id: 3,
      question: "SUICIDE",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Ideas of guilt" },
        { value: 2, label: "Frequent weeping" },
        { value: 3, label: "Sadness" },
        { value: 4, label: "Exterem symptions" },
      ],
    },
    {
      id: 4,
      question:
        "INAOMIA:EARLY IN THE NIGHT",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Occasional" },
        { value: 2, label: "Frequent" },
        { value: 3, label: "" },
        { value: 4, label: "" },
      ],
    },
    {
      id: 5,
      question: "INAOMIA:MIDDLE IN THE NIGHT",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Ideas of guilt" },
        { value: 2, label: "Frequent weeping" },
        { value: 3, label: "" },
        { value: 4, label: "" },
      ],
    },
    {
      id: 6,
      question:
        "INAOMIA:EARLY HOURS OF THE MORNING",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Occasional" },
        { value: 2, label: "Frequent" },
        { value: 3, label: "" },
        { value: 4, label: "" },
      ],
    },
    {
      id: 7,
      question: "RETARDATION(slowness of thought and speech, impaired ability to concerntrate, decreased motor activity)",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Ideas of guilt" },
        { value: 2, label: "Frequent weeping" },
        { value: 3, label: "Sadness" },
        { value: 4, label: "Exterem symptions" },
      ],
    },
    {
      id: 8,
      question:
        "How many drinks containing alcohol do you have on a typical day when you are drinking?",
      options: [
        { value: 0, label: "None" },
        { value: 1, label: "Occasional" },
        { value: 2, label: "Frequent" },
        { value: 3, label: "Interview difficult" },
        { value: 4, label: "Fear" },
      ],
    },
    {
      id: 9,
      question: "RETARDATION(slowness of thought and speech, impaired ability to concerntrate, decreased motor activity)",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Ideas of guilt" },
        { value: 2, label: "Frequent weeping" },
        { value: 3, label: "" },
        { value: 4, label: "" },
      ],
    },
    {
      id: 10,
      question:
        "How many drinks containing alcohol do you have on a typical day when you are drinking?",
      options: [
        { value: 0, label: "None" },
        { value: 1, label: "Mild" },
        { value: 2, label: "Severe" },
        { value: 3, label: "Loss of insight" },
        { value: 4, label: "Obvious Severe" },
      ],
    },
    {
      id: 11,
      question:
        "INAOMIA:EARLY IN THE NIGHT",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Occasional" },
        { value: 2, label: "Frequent" },
        { value: 3, label: "Interview difficult" },
        { value: 4, label: "Fear" },
      ],
    },
    {
      id: 12,
      question: "INAOMIA:MIDDLE IN THE NIGHT",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Ideas of guilt" },
        { value: 2, label: "Frequent weeping" },
        { value: 3, label: "" },
        { value: 4, label: "" },
      ],
    },
    {
      id: 13,
      question:
        "INAOMIA:EARLY HOURS OF THE MORNING",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Occasional" },
        { value: 2, label: "Frequent" },
        { value: 3, label: "" },
        { value: 4, label: "" },
      ],
    },
    {
      id: 14,
      question: "RETARDATION(slowness of thought and speech, impaired ability to concerntrate, decreased motor activity)",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Ideas of guilt" },
        { value: 2, label: "Frequent weeping" },
        { value: 3, label: "" },
        { value: 4, label: "" },
      ],
    },
    {
      id: 15,
      question:
        "How many drinks containing alcohol do you have on a typical day when you are drinking?",
      options: [
        { value: 0, label: "None" },
        { value: 1, label: "Occasional" },
        { value: 2, label: "Frequent" },
        { value: 3, label: "Interview difficult" },
        { value: 4, label: "Fear" },
      ],
    },
    {
      id: 16,
      question: "RETARDATION(slowness of thought and speech, impaired ability to concerntrate, decreased motor activity)",
      options: [
        { value: 0, label: "Absent" },
        { value: 1, label: "Ideas of guilt" },
        { value: 2, label: "Frequent weeping" },
        { value: 3, label: "" },
        { value: 4, label: "" },
      ],
    },
    {
      id: 17,
      question:
        "How many drinks containing alcohol do you have on a typical day when you are drinking?",
      options: [
        { value: 0, label: "None" },
        { value: 1, label: "Mild" },
        { value: 2, label: "Severe" },
        { value: 3, label: "" },
        { value: 4, label: "" },
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
                <td className="px-4 py-2 border">{question.id}  {question.question}</td>
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

export default HAM_D;

