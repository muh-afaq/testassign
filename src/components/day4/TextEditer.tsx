"use client";

import { Flex, Button, TextField } from "@radix-ui/themes";
import React, { useState, useRef } from "react";

interface TextEditorProps {}

const TextEditer: React.FC<TextEditorProps> = () => {
  const [variableCounter, setVariableCounter] = useState<number>(1); // For {{1}}, {{2}}, etc.
  const editorRef = useRef<HTMLDivElement>(null); // Ref for the editable div

  // Handle formatting for bold, italic
  const applyFormat = (command: string) => {
    document.execCommand(command, false);
  };

  // Handle adding variables {{1}}, {{2}}, etc.
  const addVariable = () => {
    const variableText = `{{ ${variableCounter} }}`;
    document.execCommand("insertText", false, variableText);
    setVariableCounter(variableCounter + 1); // Increment the counter
  };

  // Handle inserting an emoji
  const addEmoji = (emoji: string) => {
    document.execCommand("insertText", false, emoji);
  };

  return (
    <Flex direction="column" className="text-editer-container" gap="3">
      {/* Formatting buttons */}
      <Flex gap="2" mb="2">
        <Button variant="soft" onClick={() => applyFormat("bold")}>
          Bold
        </Button>
        <Button variant="soft" onClick={() => applyFormat("italic")}>
          Italic
        </Button>
        <Button variant="soft" onClick={() => addEmoji("😊")}>
          Add Emoji 😊
        </Button>
        <Button variant="soft" onClick={addVariable}>
          Add Variable
        </Button>
      </Flex>

      {/* Text editor area */}
      <TextField.Root
        ref={editorRef as React.RefObject<HTMLInputElement>}
        contentEditable={true}
        suppressContentEditableWarning={true}
        placeholder="Write your text here..."
        className="border p-4 w-full bg-white rounded shadow-sm"
        style={{
          outline: "none",
          height: "200px",
          flexDirection: "column",
        }}
      ></TextField.Root>
    </Flex>
  );
};

export default TextEditer;
