import { Flex, Box } from "@radix-ui/themes";
import React from "react";
import Question from "./Question";
import Radiofiled from "./Radiofiled";

// Interface for props
interface SectionFiledProps {
  width: string;
  height: string;
  indexNo: number;
  questionData: Array<{
    id: string;
    questionText: string;
    answers: Array<{ value: string; valueLable: string; label: string }>;
  }>;
}

const SectionFiled = ({
  width,
  height,
  indexNo,
  questionData,
}: SectionFiledProps) => {
  return (
    <Flex wrap="wrap" className="px-2 w-full">
      {questionData.map((question, index) => (
        <Box
          key={question.id}
          p="4"
          className={`w-${width} h-${height} ${
            index % indexNo === 0 ? "bg-white" : "bg-gray-100"
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

export default SectionFiled;
