"use client";
import QS_MOCA from "@/constant/QS_MOCA";
import TableHead from "@/constant/TableHead";
import TrialSection from "@/constant/TrialSection";
import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: { value: number; label: string }[];
}

const MOCA = () => {
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [totalScore, setTotalScore] = useState(0);

  const questionsVE: Question[] = [
    {
      id: 1,
      question: "Ask Patient to trace the diagram in order",
      options: [
        { value: 0, label: "Not Completed" },
        { value: 1, label: "+1 Completed Correctly" },
      ],
    },
    {
      id: 2,
      question: "Ask Patient to copy cube",
      options: [
        { value: 0, label: "Not Completed" },
        { value: 1, label: "+1 Completed Correctly" },
      ],
    },

    {
      id: 3,
      question: "Ask patient to draw a clock (ten past eleven)",
      options: [
        {
          value: 3,
          label:
            "+3 Correctly drew all features (i.e., contour, numbers, and hands)",
        },
        {
          value: 2,
          label:
            "+2 Correctly drew two out of three features (i.e., two out of contour, numbers, and hands)",
        },
        { value: 1, label: "+1 Correctly drew contour only" },
        { value: 1, label: "+1 Correctly drew numbers only" },
        { value: 1, label: "+1 Correctly drew hands only" },
        { value: 0, label: "None of the above" },
      ],
    },
  ];
  const questionsNeaming: Question[] = [
    {
      id: 1,
      question: "Ask Patient to trace the diagram in order",
      options: [
        { value: 0, label: "Not Completed" },
        { value: 1, label: "+1 Completed Correctly" },
      ],
    },
    {
      id: 2,
      question: "Ask Patient to copy cube",
      options: [
        { value: 0, label: "Not Completed" },
        { value: 1, label: "+1 Completed Correctly" },
      ],
    },

    {
      id: 3,
      question: "Ask Patient to copy cube",
      options: [
        { value: 0, label: "Not Completed" },
        { value: 1, label: "+1 Completed Correctly" },
      ],
    },
  ];
  const questionsAbstraction: Question[] = [
    {
      id: 1,
      question: "Ask Patient to trace the diagram in order",
      options: [
        { value: 0, label: "Not Completed" },
        { value: 1, label: "+1 Completed Correctly" },
      ],
    },
    {
      id: 2,
      question: "Ask Patient to copy cube",
      options: [
        { value: 0, label: "Not Completed" },
        { value: 1, label: "+1 Completed Correctly" },
      ],
    },
  ];
  const headers: string[] = [
    "Trial",
    "Face",
    "Velvet",
    "Church",
    "Daisy",
    "Red",
  ];
  const headersDR: string[] = ["", "Face", "Velvet", "Church", "Daisy", "Red"];
  const headersOR: string[] = ["Date", "Month", "Day", "place", "City"];
  const trials = [
    { trialNumber: "1st Trial", values: [false, true, false, false, true] },
    { trialNumber: "2nd Trial", values: [false, true, false, false, true] },
  ];
  const trialsDR = [
    { trialNumber: "", values: [false, true, false, false, true] },
    { trialNumber: "", values: [false, true, false, false, true] },
  ];
  const handleScoreChange = (section: string, score: number) => {
    setScores((prevScores) => {
      const updatedScores = { ...prevScores, [section]: score };
      const newTotalScore = Object.values(updatedScores).reduce(
        (acc, curr) => acc + curr,
        0
      );
      setTotalScore(newTotalScore);
      return updatedScores;
    });
  };

  const scoreColor = () => {
    if (totalScore >= 26) {
      return "bg-green-100 text-green-800";
    } else if (totalScore >= 0 && totalScore <= 25) {
      return "bg-red-100 text-red-800";
    }
    return "";
  };

  return (
    <div className="overflow-auto p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4 text-sm">
        <p>Give pt a written form and instruct them as follows</p>
      </div>

      <QS_MOCA
        title="Visuospatial / Executive"
        questions={questionsVE}
        handleScoreChange={handleScoreChange}
      />
      <QS_MOCA
        title="Neaming"
        questions={questionsNeaming}
        handleScoreChange={handleScoreChange}
      />
      <div>
        <div className="bg-gray-100 p-2 mb-4">
          <span className="text-black w-full text-sm font-medium">Memory</span>
        </div>
        <div className="text-black w-full text-sm font-thin">
          Read "Face", "Velvet", "Church", "Daisy", "Red", and ask patient to
          repaeate (do tow trial and a recall leter in exam)
        </div>
        <div className="text-[12px]">Check all the recalled words</div>
        <div className="w-1/2 bg-blue-800">
          <table className="text-[12px] border">
            <TableHead headers={headers} />
            <tbody className="border">
              {trials.map((trial, index) => (
                <TrialSection
                  key={index}
                  trialNumber={trial.trialNumber}
                  initialValues={trial.values}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <QS_MOCA
        title="Abstraction"
        questions={questionsAbstraction}
        handleScoreChange={handleScoreChange}
      />
      <div>
        <div className="bg-gray-100 p-2 mb-4">
          <span className="text-black w-full text-sm font-medium">
            Delayed recall
          </span>
        </div>
        <div className="text-black w-full text-sm font-thin">
          Read "Face", "Velvet", "Church", "Daisy", "Red", and ask patient to
          repaeate (do tow trial and a recall leter in exam)
        </div>
        <div className="text-[12px]">Check all the recalled words</div>
        <div className="w-1/2 bg-blue-800">
          <table className="text-[12px] border">
            <TableHead headers={headersDR} />
            <tbody className="border">
              {trialsDR.map((trial, index) => (
                <TrialSection
                  key={index}
                  trialNumber={trial.trialNumber}
                  initialValues={trial.values}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="bg-gray-100 p-2 mb-4">
          <span className="text-black w-full text-sm font-medium">
            Orientation
          </span>
        </div>
        <div className="text-black w-full text-sm font-thin">
          1. Ask patient date,month, year, day, place and city
        </div>
        <div className="text-[12px]">Check all the recalled words</div>
        <div className="w-1/2 bg-blue-800">
          <table className="text-[12px] border">
            {/* <TableHead headers={headersOR} /> */}
            <thead className="t  text-gray-700 uppercase">
              <tr>
                {headersOR.map((header, index) => (
                  <th
                    key={index}
                    className={`py-3 px-4 ${
                      index === 0 ? "w-[12%] text-left" : "w-[12%] text-center"
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border">
              {trialsDR.map((trial, index) => (
                <TrialSection
                  key={index}
                  trialNumber={trial.trialNumber}
                  initialValues={trial.values}
                />
              ))}
            </tbody>
          </table>
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
            
          </div>
        </div>
        <div className="flex items-center text-sm gap-2">
          <div
            className={`flex items-center gap-2 rounded-2xl px-4 `}
            // ${colorName}
          >
            <span>Total Score: {totalScore}</span>
          </div>
          <div>{18}</div>
          {/* <div>{interpretation}</div> */}
        </div>
      </div>
    </div>
  );
};

export default MOCA;
