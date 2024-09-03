"use client";
import TableBody from "@/constant/TableBody";
import TableHead from "@/constant/TableHead";
import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
}

const PCL_5 = () => {
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
    { id: 8, question: "Trouble relaxing" },
    { id: 9, question: "Being so restless that it is hard to sit still" },
    { id: 10, question: "Becoming easily annoyed or irritable" },
    { id: 11, question: "Feeling afraid as if something awful might happen" },
    { id: 12, question: "Not being able to stop or control worrying" },
    { id: 13, question: "Worrying too much about different things" },
    { id: 14, question: "Trouble relaxing" },
    { id: 15, question: "Being so restless that it is hard to sit still" },
    { id: 16, question: "Becoming easily annoyed or irritable" },
    { id: 17, question: "Feeling afraid as if something awful might happen" },
    { id: 18, question: "Trouble relaxing" },
    { id: 19, question: "Being so restless that it is hard to sit still" },
  ];

  const headers: string[] = [
    "Over the last 1 month, how often have you been bothered by any of the following problem?",
    "Not at all",
    "A little bit",
    "Quite a Bit",
    "Moderately",
    "Extremely",
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
    if (totalScore < 13) {
      return {
        colorName: "bg-white text-gray-700",
        significant: "Not Significant",
      };
    }
    if (totalScore >= 13 && totalScore <= 17) {
      return {
        colorName: "bg-green-200 text-green-900",
        significant: "Mild Symptoms",
      };
    }
    if (totalScore >= 18 && totalScore <= 22) {
      return {
        colorName: "bg-yellow-200 text-yellow-900",
        significant: "Moderate Symptoms",
      };
    }
    return {
      colorName: "bg-red-200 text-red-900",
      significant: "Severe Symptoms",
    };
  };

  const { colorName, significant } = scoreColor();
  return (
    <div className="overflow-auto  p-4 bg-white rounded-lg shadow-md">
      <div>
        
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

        {/* Score Interpretation */}
        <div className="flex justify-between border rounded-md bg-white shadow-md p-2">
          <div className="  flex gap-2 items-center ">
            <div className=" text-sm">Score Interpretation</div>
            <div className=" flex  items-center text-sm gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white border rounded-sm" />
                <span>{`<0-10 None/Minimal`}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-300 border rounded-sm" />
                <span>11-20 Mild</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-300 border rounded-sm" />
                <span>21-40 Moderate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-300 border rounded-sm" />
                <span>41-60 Severe </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-300 border rounded-sm" />
                <span>61-80 Very Severe </span>
              </div>
            </div>
          </div>
          <div className="flex items-center text-sm gap-2">
            <div
              className={`flex items-center gap-2 rounded-2xl px-4 ${colorName}`}
            >
              <span>Total Score: {totalScore}</span>
            </div>
            <div>{significant}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCL_5;
