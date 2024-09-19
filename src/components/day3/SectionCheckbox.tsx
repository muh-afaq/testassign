import { Checkbox, CheckboxGroup, Flex, Table, Text } from "@radix-ui/themes";
import React from "react";

interface SectionCheckboxProps {
  description: string;
  instruction: string;
  headers: string[];
  trails: any[];
  pointscor: string;
  register: any;
  sectionKey: string;
}

const SectionCheckbox = ({
  description,
  instruction,
  headers,
  trails,
  pointscor,
  register,
  sectionKey,
}: SectionCheckboxProps) => {
  return (
    <Flex direction={"column"} className="p-3">
      <Text size={"3"} weight={"bold"}>
        {description}
      </Text>
      <Text size={"2"} weight={"medium"}>
        {instruction}
      </Text>

      <Table.Root size={"1"} variant="surface" className="w-[60%]">
        <Table.Header className="bg-blue-100">
          <Table.Row>
            <Table.ColumnHeaderCell>Trail</Table.ColumnHeaderCell>
            {headers.map((header: string, index: number) => (
              <Table.ColumnHeaderCell key={index}>
                {header}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {trails.map((trail: any, trailIndex: number) => (
            <Table.Row key={trailIndex}>
              <Table.RowHeaderCell>{trail.trailName}</Table.RowHeaderCell>

              {trail.options.map((option: any, optionIndex: number) => (
                <Table.Cell key={optionIndex}>
                  <Flex align="center" gap="2">
                    <CheckboxGroup.Root
                      {...register(
                        `${sectionKey}[${trailIndex}][${optionIndex}]`
                      )}
                    >
                      <CheckboxGroup.Item value={option.label}>
                        {option.label}
                      </CheckboxGroup.Item>
                    </CheckboxGroup.Root>
                  </Flex>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Text size={"2"}>{pointscor}</Text>
    </Flex>
  );
};

export default SectionCheckbox;
