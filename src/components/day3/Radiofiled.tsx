import { Flex, Radio, RadioGroup, Text } from "@radix-ui/themes";
import React from "react";

interface RadioGroupProps {
  defaultValue: string;
  options: Array<{ value: string; valueLable: string; label: string }>;
}

const Radiofiled = ({ defaultValue, options }: RadioGroupProps) => {
  return (
    <RadioGroup.Root defaultValue={defaultValue}>
      {options.map((option) => (
        <Flex key={option.value}  gap="2">
          <Flex  gap={"1"}>
            <Radio value={option.value} />
            <Text size={"2"}>{option.valueLable}</Text>
          </Flex>
          <Text size={"2"}>{option.label}</Text>
        </Flex>
      ))}
    </RadioGroup.Root>
  );
};

export default Radiofiled;
