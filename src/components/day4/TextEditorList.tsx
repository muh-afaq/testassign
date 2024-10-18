'use client'

import { Flex, Button } from '@radix-ui/themes';
import React, { useState } from 'react';
import TextEditer from './TextEditer'; // Import your TextEditer component

interface Editor {
  id: number;
}

const TextEditorList: React.FC = () => {
  const [editors, setEditors] = useState<Editor[]>([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]); // Initial state with 4 editors

  // Function to remove an editor by ID
  const removeEditor = (id: number) => {
    const filteredEditors = editors.filter((editor) => editor.id !== id);
    setEditors(filteredEditors);
  };

  return (
    <Flex direction="column" className="text-editor-list" gap="4">
      {editors.map((editor) => (
        <Flex key={editor.id} direction="column" gap="2">
          <Flex justify="between" align="center">
            <h3>Text Editor {editor.id}</h3>
            <Button variant="soft" color="red" onClick={() => removeEditor(editor.id)}>
              Remove
            </Button>
          </Flex>
          <TextEditer /> {/* Render each TextEditer component */}
        </Flex>
      ))}
    </Flex>
  );
};

export default TextEditorList;
