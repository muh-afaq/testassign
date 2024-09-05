import React from "react";

interface Option {
  value: number;
  label: string;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

interface QuestionSectionProps {
  title: string;
  questions: Question[];
  handleScoreChange: (section: string, score: number) => void;
}

const QS_MOCA: React.FC<QuestionSectionProps> = ({
  title,
  questions,
  handleScoreChange,
}) => {
  return (
    <div>
      <div className="bg-gray-100 p-2 mb-4">
        <span className="text-black w-full text-sm font-medium">{title}</span>
      </div>

      {/* Flex container with flex-wrap and equal fixed widths */}
      <div className="flex  ">
        {questions.map((question) => (
          <div
            key={question.id}
            className="w-full  bg-gray-50 p-4 items-center"
          >
            <h3 className="text-sm font-medium mb-2">
              {question.id}. {question.question}
            </h3>
            <div className="mt-2">
              {question.options.map((option, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option.value}
                    onChange={() =>
                      handleScoreChange(`question-${question.id}`, option.value)
                    }
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QS_MOCA;
