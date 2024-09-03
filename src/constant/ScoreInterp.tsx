import React from "react";

const ScoreInterp = () => {
  return (
    <div className=" p-4">
      <div className="text-lg font-semibold mb-2">Score Interpretation</div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border" />
          <span>0-4 No Anxiety</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-300 border" />
          <span>5-9 Mild Anxiety</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-300 border" />
          <span>10-14 Moderate Anxiety</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-300 border" />
          <span>15-21 Severe Anxiety</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreInterp;
