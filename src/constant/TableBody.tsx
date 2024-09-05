import React from "react";

interface Question {
  id: number;
  question: string;
}

interface ValueLable {
  value: number;
  label: string;
}

interface TableBodyProps {
  questions: Question[];
  handleRadioChange: (questionId: number, value: number, label: string) => void;
  valueLabels: ValueLable[];
}

const TableBody: React.FC<TableBodyProps> = ({
  questions,
  handleRadioChange,
  valueLabels,
}) => {
  return (
    <tbody>
      {questions.map((question) => (
        <tr key={question.id} className="border-b  hover:bg-gray-50">
          <td className="py-4 w-[40%] px-4 text-left">
            {question.id}. {question.question}
          </td>
          {valueLabels.map(({ value, label }) => (
            <td key={value} className="py-4 px-4 text-center w-[12%] ">
              <input
                type="radio"
                name={`question${question.id}`}
                value={value}
                onChange={() => handleRadioChange(question.id, value, label)}
              />
              <span className="ml-2 flex-row">{label}</span>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
