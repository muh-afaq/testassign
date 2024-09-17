import { Flex, Radio, RadioGroup, Text } from "@radix-ui/themes";
import React from "react";

interface RadioGroupProps {
  defaultValue: string;
  options: Array<{ value: string; label: string }>;
}

const Radiofiled = ({ defaultValue, options }: RadioGroupProps) => {
  return (
    <RadioGroup.Root defaultValue={defaultValue}>
      {options.map((option) => (
        <Flex key={option.value} align="center" gap="2">
          <Radio value={option.value} />
          <Text>{option.label}</Text>
        </Flex>
      ))}
    </RadioGroup.Root>
  );
};

export default Radiofiled;
