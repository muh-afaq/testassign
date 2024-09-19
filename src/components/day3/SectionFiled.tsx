import { Box, Flex, Radio, Text } from "@radix-ui/themes";
import React from "react";

interface SectionFiledProps {
  width: string;
  height: string;
  indexNo: number;
  questionData: any;
  register: any;
  sectionKey: string;
}

const SectionFiled: React.FC<SectionFiledProps> = ({
  width,
  height,
  indexNo,
  questionData,
  register,
  sectionKey,
}) => {
  return (
    <Flex wrap="wrap" className="px-2 ">
      {questionData.map((question: any, questionIndex: number) => (
        <Box
          key={question.id}
          p="4"
          className={`${width} ${height} ${
            questionIndex % indexNo === 0 ? "bg-white" : "bg-gray-100"
          }`}
        >
          <Flex gap="2" className="mb-4 ">
            <Text size="2" weight="bold" color="gray">
              {question.id}.
            </Text>
            <Text size="2" weight="bold" color="gray">
              {question.questionText}
            </Text>
          </Flex>
          {question.answers.map((answer: any, answerIndex: number) => (
            <Flex key={answer.value} gap={"2"} className="mb-3">
              <Radio
                {...register(`${sectionKey}[${questionIndex}]`, {
                  required: true,
                })}
                value={answer.value}
              />
              <Text size={"2"}>{answer.valueLable}</Text>
              <Text size={"2"}>{answer.label}</Text>
            </Flex>
          ))}
        </Box>
      ))}
    </Flex>
  );
};

export default SectionFiled;
