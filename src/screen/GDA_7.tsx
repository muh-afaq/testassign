"use client";
import TableBody from "@/constant/TableBody";
import TableHead from "@/constant/TableHead";
import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
}

const GDA_7 = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const questions: Question[] = [
    { id: 1, question: "Feeling nervous, anxious or on edge" },
    { id: 2, question: "Not being able to stop or control worrying" },
    { id: 3, question: "Worrying too much about different things" },
    { id: 4, question: "Trouble relaxing" },
    { id: 5, question: "Being so restless that it is hard to sit still" },
    { id: 6, question: "Becoming easily annoyed or irritable" },
    { id: 7, question: "Feeling afraid as if something awful might happen" },
  ];

  const headers: string[] = [
    "Over the last two weeks, how often have you been bothered by any of the following problems?",
    "Not at all",
    "Some days",
    "More than half the days",
    "Nearly every day",
  ];

  const valueLabels = [
    { value: 0, label: "0" },
    { value: 1, label: "+1" },
    { value: 2, label: "+2" },
    { value: 3, label: "+3" },
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
    if (totalScore >= 0 && totalScore <= 4) {
      return {
        colorName: "bg-white text-gray-700",
        anxiety: "No Anxiety",
      };
    }
    if (totalScore >= 5 && totalScore <= 9) {
      return {
        colorName: "bg-green-200 text-green-900",
        anxiety: "Mild Anxiety",
      };
    }
    if (totalScore >= 10 && totalScore <= 14) {
      return {
        colorName: "bg-yellow-200 text-yellow-900",
        anxiety: "Moderate Anxiety",
      };
    }
    return {
      colorName: "bg-red-200 text-red-900",
      anxiety: "Severe Anxiety",
    };
  };

  const { colorName, anxiety } = scoreColor();

  return (
    <div className="overflow-auto w-[80%] p-4 bg-white rounded-lg shadow-md">
      {/* Questionnaire Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left text-gray-500 bg-white shadow-lg rounded-md">
          <TableHead headers={headers} />
          <TableBody
            valueLabels={valueLabels}
            questions={questions}
            handleRadioChange={handleRadioChange}
          />
        </table>
      </div>

      {/* Score Calculation */}
      <div className="flex justify-between items-center p-2 border-t bg-white rounded-md mb-4">
        <div className=" font-semibold text-lg">Score Calculation</div>
        <div className="flex items-center text-sm gap-2">
          <div
            className={`flex items-center gap-2 rounded-2xl px-4 ${colorName}`}
          >
            <span>Total Score: {totalScore}</span>
          </div>
          <div>{anxiety}</div>
        </div>
      </div>

      {/* Score Interpretation */}
      <div className="p-2 border rounded-md bg-white shadow-md">
        <div className="text-lg font-semibold mb-2">Score Interpretation</div>
        <div className="flex text-sm gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white border rounded-sm" />
            <span>0-4 No Anxiety</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-300 border rounded-sm" />
            <span>5-9 Mild Anxiety</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-300 border rounded-sm" />
            <span>10-14 Moderate Anxiety</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-300 border rounded-sm" />
            <span>15-21 Severe Anxiety</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDA_7;
