import { Flex, Text } from "@radix-ui/themes";
import React from "react";

interface titleProps {
  title: string;
}

const Title = ({ title }: titleProps) => {
  return (
    <div className="px-2">
      <Flex height={"12px"} align={"center"} className="p-4 bg-gray-200">
        <Text size={"4"} weight={"medium"}>
          {title}
        </Text>
      </Flex>
    </div>
  );
};

export default Title;
