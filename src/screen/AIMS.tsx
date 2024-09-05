"use client";
import TableBody from "@/constant/TableBody";
import TableHead from "@/constant/TableHead";
import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
}

const AIMS = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const questions: Question[] = [
    { id: 1, question: "Feeling nervous, anxious or on edge" },
    { id: 2, question: "Not being able to stop or control " },
    { id: 3, question: "Worrying too much about different things" },
    { id: 4, question: "Trouble relaxing" },
    { id: 5, question: "Being so restless that it is hard to sit stille" },
    { id: 6, question: "Becoming easily annoyed or irritable" },
    { id: 7, question: "Feeling afraid as if something irritableing" },
    { id: 8, question: "Trouble relaxing" },
    { id: 9, question: "Being so restless that it is hard to sit still" },
    { id: 10, question: "Becoming easily annoyed or irritable" },
    { id: 11, question: "Feeling afraid as if something " },
    { id: 12, question: "Not being able to stop or control " },
    { id: 13, question: "Worrying too much about different things" },
    { id: 14, question: "Trouble relaxing" },
  ];
  // Filter the questions to include only those with IDs between 2 and 7
  const Questions1to4 = questions.filter(
    (question) => question.id >= 1 && question.id <= 4
  );
  const Questions5to6 = questions.filter(
    (question) => question.id >= 5 && question.id <= 6
  );
  const Questions7 = questions.filter((question) => question.id == 7);
  const Questions8to10 = questions.filter(
    (question) => question.id >= 8 && question.id <= 10
  );
  const Questions11to14 = questions.filter(
    (question) => question.id >= 11 && question.id <= 14
  );

  const headers: string[] = [
    "Please rate the severity of movements observed",
    "None",
    "Minimal",
    "Mild",
    "Moderate",
    "Severe",
  ];

  const valueLabels = [
    { value: 0, label: "0" },
    { value: 1, label: "+1" },
    { value: 2, label: "+2" },
    { value: 3, label: "+3" },
    { value: 4, label: "+4" },
  ];

  const valueLabelsforTwo = [
    { value: 0, label: "Yes" },
    { value: 1, label: "No" },

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
        <table className="w-full text-sm  text-gray-500 bg-white shadow-lg rounded-md">
          <TableHead headers={headers} />
        </table>
        <div className="bg-gray-100 p-1">
          <span className="text-black w-full text-sm font-medium">
            Facial and Oral Movents
          </span>
        </div>
        {/* Questionnaire Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm  text-gray-500 bg-white shadow-lg rounded-md">
            
            <TableBody
              valueLabels={valueLabels}
              questions={Questions1to4}
              handleRadioChange={handleRadioChange}
            />
          </table>
        </div>
      </div>
      <div>
        <div className="bg-gray-100 p-1">
          <span className="text-black w-full text-sm font-medium">
            Extreamity Movements
          </span>
        </div>
        {/* Questionnaire Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm  text-gray-500 bg-white shadow-lg rounded-md">
            <TableBody
              valueLabels={valueLabels}
              questions={Questions5to6}
              handleRadioChange={handleRadioChange}
            />
          </table>
        </div>
      </div>
      <div>
        <div className="bg-gray-100 p-1">
          <span className="text-black w-full text-sm font-medium">
            Tranck Movment
          </span>
        </div>
        {/* Questionnaire Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm  text-gray-500 bg-white shadow-lg rounded-md">
            <TableBody
              valueLabels={valueLabels}
              questions={Questions7}
              handleRadioChange={handleRadioChange}
            />
          </table>
        </div>
      </div>
      <div>
        <div className="bg-gray-100 p-1">
          <span className="text-black w-full text-sm font-medium">
            Global Judgments
          </span>
        </div>
        {/* Questionnaire Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm  text-gray-500 bg-white shadow-lg rounded-md">
            <TableBody
              valueLabels={valueLabels}
              questions={Questions8to10}
              handleRadioChange={handleRadioChange}
            />
          </table>
        </div>
      </div>
      {/* Score Interpretation */}
      <div className="flex justify-between border rounded-md bg-white shadow-md p-2">
        <div className="flex gap-2 items-center">
          <div className="text-sm">Score Interpretation</div>
          
        </div>
        <div className="flex items-center text-sm gap-2">
          <div className={`flex items-center gap-2 rounded-2xl px-4 ${colorName}`}>
            <span>Total Score: {totalScore}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-100 p-1">
          <span className="text-black w-full text-sm font-medium">
            Dental Status
          </span>
        </div>
        {/* Questionnaire Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm  text-gray-500 bg-white shadow-lg rounded-md">
            <TableBody
              valueLabels={valueLabelsforTwo}
              questions={Questions11to14}
              handleRadioChange={handleRadioChange}
            />
          </table>
        </div>
      </div>
    </div>
  );
};

export default AIMS;
