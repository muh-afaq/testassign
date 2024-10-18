'use client';

import React, { useState } from 'react';
import { Button, Card, Row, Col, Space } from 'antd';
import TextEditer from './TextEditer';

interface Editor {
  id: number;
}

const TextEditorList: React.FC = () => {
  const [editors, setEditors] = useState<Editor[]>([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]);

  const removeEditor = (id: number) => {
    const filteredEditors = editors.filter((editor) => editor.id !== id);
    setEditors(filteredEditors);
  };

  return (
    <div className="w-full mx-auto p-4">
      <Row gutter={[16, 16]} justify="center">
        {editors.map((editor) => (
          <Col
            key={editor.id}
            xs={24} sm={12} md={8} lg={6}
            className="flex justify-center"
          >
            <Card
              title={<h3 className="text-lg font-medium">Text Editor {editor.id}</h3>}
              extra={
                <Button
                  type="primary"
                  danger
                  onClick={() => removeEditor(editor.id)}
                >
                  Remove
                </Button>
              }
              className="w-full"
            >
              <TextEditer />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TextEditorList;
