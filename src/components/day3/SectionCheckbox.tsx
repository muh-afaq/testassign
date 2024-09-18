import { Checkbox, Flex, Table, Text } from "@radix-ui/themes";
import React from "react";

// Define the structure for props
interface SectionCheckboxProps {
  description: string; // The description text above the table
  pointscor: string
  instruction: string; // Instruction text for the table
  headers: string[]; // Table column headers (for words like Face, Velvet, etc.)
  trails: Array<{ trailName: string; options: Array<{ label: string }> }>; // List of trails with checkbox options
}

const SectionCheckbox = ({ description, instruction, headers, trails ,pointscor}: SectionCheckboxProps) => {
  return (
    <Flex direction={"column"} className="p-3">
      <Text>{description}</Text>
      <Text>{instruction}</Text>

      <Table.Root size={'1'} variant="surface" className="w-[60%]">
        <Table.Header  >
          <Table.Row>
            <Table.ColumnHeaderCell>Trail</Table.ColumnHeaderCell>
            {/* Dynamically render table headers */}
            {headers.map((header) => (
              <Table.ColumnHeaderCell key={header}>{header}</Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body >
          {/* Render each trail and its associated checkboxes */}
          {trails.map((trail, index) => (
            <Table.Row key={index} >
              <Table.RowHeaderCell>{trail.trailName}</Table.RowHeaderCell>
              
              {trail.options.map((option, optionIndex) => (
                <Table.Cell key={optionIndex}>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text>{option.label}</Text>
                  </Flex>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Text>{pointscor}</Text>
    </Flex>
  );
};

export default SectionCheckbox;
