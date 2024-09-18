import { Flex, Text } from "@radix-ui/themes";
import React from "react";

interface QuestionProps {
  questionId: string;
  questionText: string;
}

const Question = ({ questionText, questionId }: QuestionProps) => {
  return (
    <Flex  gap="2" className="mb-4 w-auto"> {/* Aligning the number and question text */}
      <Text size="2" weight="bold" color="gray">{questionId}.</Text>
      <Text size="2" weight="bold" color="gray">{questionText}</Text>
    </Flex>
  );
};

export default Question;
