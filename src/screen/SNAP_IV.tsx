"use client";
import TableBody from "@/constant/TableBody";
import TableHead from "@/constant/TableHead";
import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
}

const SNAP_IV = () => {
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
    { id: 20, question: "Becoming easily annoyed or irritable" },
    { id: 21, question: "Feeling afraid as if something awful might happen" },
    { id: 22, question: "Becoming easily annoyed or irritable" },
    { id: 23, question: "Feeling afraid as if something awful might happen" },
    { id: 24, question: "Trouble relaxing" },
    { id: 25, question: "Being so restless that it is hard to sit still" },
    { id: 26, question: "Becoming easily annoyed or irritable" },
  ];
  // Filter the questions to include only those with IDs between 2 and 7
  const Questions1to9 = questions.filter(
    (question) => question.id >= 1 && question.id <= 9
  );
  const Questions10to18 = questions.filter(
    (question) => question.id >= 10 && question.id <= 18
  );
  const Questions19to26 = questions.filter(
    (question) => question.id >= 19 && question.id <= 26
  );

  const headers: string[] = [
    "How often have been bothered by any of the following problems?",
    "Not at all",
    "Just a Little",
    "Quite a Bit",
    "Very Much",
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
        <div className="bg-gray-100 p-1">
          <span className="text-black w-full text-sm font-medium">
            Inattention
          </span>
        </div>
        {/* Questionnaire Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-left text-gray-500 bg-white shadow-lg rounded-md">
            <TableHead headers={headers} />
            <TableBody
              valueLabels={valueLabels}
              questions={Questions1to9}
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
                <span>{`<13 - Not Significant`}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-300 border rounded-sm" />
                <span>13-17 Mild Symptoms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-300 border rounded-sm" />
                <span>18-22 Moderate Symptoms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-300 border rounded-sm" />
                <span>23-26 Severe Symptoms</span>
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
      <div>
        <div className="bg-gray-100 p-1">
          <span className="text-black w-full text-sm font-medium">
            Hyperactivity/Impulsivity
          </span>
        </div>
        {/* Questionnaire Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-left text-gray-500 bg-white shadow-lg rounded-md">
            <TableBody
              valueLabels={valueLabels}
              questions={Questions10to18}
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
                <span>{`<13 - Not Significant`}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-300 border rounded-sm" />
                <span>13-17 Mild Symptoms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-300 border rounded-sm" />
                <span>18-22 Moderate Symptoms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-300 border rounded-sm" />
                <span>23-26 Severe Symptoms</span>
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
      <div>
        <div className="bg-gray-100 p-1">
          <span className="text-black w-full text-sm font-medium">
            Opposition/Defiance
          </span>
        </div>
        {/* Questionnaire Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-left text-gray-500 bg-white shadow-lg rounded-md">
            <TableBody
              valueLabels={valueLabels}
              questions={Questions19to26}
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
                <span>{`<13 - Not Significant`}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-300 border rounded-sm" />
                <span>13-17 Mild Symptoms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-300 border rounded-sm" />
                <span>18-22 Moderate Symptoms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-300 border rounded-sm" />
                <span>23-26 Severe Symptoms</span>
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

export default SNAP_IV;
