import React, { useState } from 'react';

const MOCA = () => {
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [totalScore, setTotalScore] = useState(0);

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
      return 'bg-green-100 text-green-800';
    } else if (totalScore >= 0 && totalScore <= 25) {
      return 'bg-red-100 text-red-800';
    }
    return '';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">MOCA</h1>
      <p className="mb-4">Give pt a written form and instruct them as follows</p>

      {/* Visuospatial / Executive Section */}
      <div className="bg-gray-100 p-4 mb-4 rounded">
        <h2 className="font-semibold mb-2">Visuospatial / Executive</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Task 1 */}
          <div>
            <p>1. Ask patient to trace the diagram in order</p>
            <div className="flex items-center gap-4">
              <label>
                <input
                  type="radio"
                  name="trace"
                  onChange={() => handleScoreChange('trace', 1)}
                />
                Completed Correctly
              </label>
              <label>
                <input
                  type="radio"
                  name="trace"
                  onChange={() => handleScoreChange('trace', 0)}
                />
                Not Completed
              </label>
            </div>
          </div>
          {/* Task 2 */}
          <div>
            <p>2. Ask patient to copy cube</p>
            <div className="flex items-center gap-4">
              <label>
                <input
                  type="radio"
                  name="cube"
                  onChange={() => handleScoreChange('cube', 1)}
                />
                Completed Correctly
              </label>
              <label>
                <input
                  type="radio"
                  name="cube"
                  onChange={() => handleScoreChange('cube', 0)}
                />
                Not Completed
              </label>
            </div>
          </div>
          {/* Task 3 */}
          <div>
            <p>3. Ask patient to draw a clock (ten past eleven)</p>
            <div className="flex items-center gap-4">
              <label>
                <input
                  type="radio"
                  name="clock"
                  onChange={() => handleScoreChange('clock', 3)}
                />
                +3 Correctly drew all features (i.e., contour, numbers, and hands)
              </label>
              <label>
                <input
                  type="radio"
                  name="clock"
                  onChange={() => handleScoreChange('clock', 2)}
                />
                +2 Correctly drew two out of three features (i.e., two out of contour, numbers, and hands)
              </label>
              <label>
                <input
                  type="radio"
                  name="clock"
                  onChange={() => handleScoreChange('clock', 1)}
                />
                +1 Correctly drew contour only
              </label>
              <label>
                <input
                  type="radio"
                  name="clock"
                  onChange={() => handleScoreChange('clock', 0)}
                />
                None of the above
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Naming Section */}
      <div className="bg-gray-100 p-4 mb-4 rounded">
        <h2 className="font-semibold mb-2">Naming</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p>1. Ask patient to name the first animal</p>
            <div className="flex items-center gap-4">
              <label>
                <input
                  type="radio"
                  name="animal1"
                  onChange={() => handleScoreChange('animal1', 1)}
                />
                Named lion
              </label>
              <label>
                <input
                  type="radio"
                  name="animal1"
                  onChange={() => handleScoreChange('animal1', 0)}
                />
                Did not name lion
              </label>
            </div>
          </div>
          <div>
            <p>2. Ask patient to name the second animal</p>
            <div className="flex items-center gap-4">
              <label>
                <input
                  type="radio"
                  name="animal2"
                  onChange={() => handleScoreChange('animal2', 1)}
                />
                Named rhinoceros
              </label>
              <label>
                <input
                  type="radio"
                  name="animal2"
                  onChange={() => handleScoreChange('animal2', 0)}
                />
                Did not name rhinoceros
              </label>
            </div>
          </div>
          <div>
            <p>3. Ask patient to name the third animal</p>
            <div className="flex items-center gap-4">
              <label>
                <input
                  type="radio"
                  name="animal3"
                  onChange={() => handleScoreChange('animal3', 1)}
                />
                Named camel
              </label>
              <label>
                <input
                  type="radio"
                  name="animal3"
                  onChange={() => handleScoreChange('animal3', 0)}
                />
                Did not name camel
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      {/* Memory, Attention, Language, Abstraction, Delayed recall, Orientation sections would follow the same structure */}

      {/* Score Interpretation */}
      <div className={`p-4 rounded-md shadow-md ${scoreColor()}`}>
        <div className="flex justify-between items-center">
          <div className="font-semibold text-lg">Score Interpretation</div>
          <div className="flex items-center text-sm gap-2">
            <span>Total Score: {totalScore}</span>
          </div>
          <div>{totalScore >= 26 ? 'Normal' : 'Abnormal'}</div>
        </div>
      </div>
    </div>
  );
};

export default MOCA;
