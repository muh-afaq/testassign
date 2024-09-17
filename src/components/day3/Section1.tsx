import { Flex, Box } from "@radix-ui/themes";
import React from "react";
import Question from "./Question";
import Radiofiled from "./Radiofiled";

// Dummy data for questions and answer options
const questionData = [
  {
    id: "1",
    questionText:
      "Read list of digits (2, 1, 8, 5, 4) at 1 digit/sec and ask patient to repeat them in the forward order",
    answers: [
      { value: "repeated", label: "+1 Repeated correctly" },
      { value: "not_repeated", label: "Did not repeat correctly" },
    ],
  },
  {
    id: "2",
    questionText:
      "Read list of digits (7, 4, 2) at 1 digit/sec and ask patient to repeat them in the backward order",
    answers: [
      { value: "repeated", label: "+1 Repeated correctly" },
      { value: "not_repeated", label: "Did not repeat correctly" },
    ],
  },
  {
    id: "3",
    questionText:
      "Read list of letters and ask patient to tap with their hand at each letter A: FBAC MNAA JKLB AFAK DEAA AJAM OFAAB",
    answers: [
      { value: "less_errors", label: "<2 errors" },
      { value: "more_errors", label: ">=2 errors" },
      { value: "three_correct", label: "+3 4 or 5 correct" },
      { value: "one_correct", label: "+1 1 correct" },
      { value: "one_correct", label: "+1 1 correct" },
    ],
  },
  
];

interface SectionWidth {
  width: number;
}

// const SectionFiled1 = ({ width }: SectionWidth) => {
const SectionFiled1 = () => {
  return (
    <Flex wrap="wrap" className="p-2">
      {" "}
      {/* Enable wrapping and add spacing */}
      {questionData.map((question, index) => (
        <Box
          key={question.id}
          p="4"
          className={`w-1/3 h-52 ${
            /* Set the width for two columns */
            index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
          }`}
        >
          {/* Question Component */}
          <Question
            questionId={question.id}
            questionText={question.questionText}
          />

          {/* RadioField Component */}
          <Radiofiled
            defaultValue={question.answers[0].value}
            options={question.answers}
          />
        </Box>
      ))}
    </Flex>
  );
};

export default SectionFiled1;
