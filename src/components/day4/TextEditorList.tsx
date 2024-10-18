"use client";
import React, { useRef, useState } from "react";
import { Tabs } from "antd";
import TextEditor from "./TextEditer";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const initialItems = [
  { label: "Card 1", children: <TextEditor  texteditable='Card 1' />, key: "1" },
  { label: "Card 2", children: <TextEditor texteditable='Card 2'/>, key: "2" },
  {
    label: "Card 3",
    children: <TextEditor texteditable='Card 3'/>,
    key: "3",
  },
];

const TextEditorList: React.FC = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    // Find the highest key (as number) in the current tabs
    const highestKey = Math.max(...items.map(item => parseInt(item.key, 10)), 0);
  
    // Increment the key to create the new one
    const newKey = highestKey + 1;
    const newTabLabel = `Card ${newKey}`; // Label will be "Card 4", "Card 5", etc.
  
    // Add the new tab with the updated label and key
    const newPanes = [
      ...items,
      {
        label: newTabLabel, 
        children: <TextEditor texteditable={newTabLabel} />, 
        key: newKey.toString(),  // Ensure key is a string for compatibility
      },
    ];
  
    // Set the new tab as the active one
    setItems(newPanes);
    setActiveKey(newKey.toString()); // Set the new tab as the active tab
  };
  
  

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: "add" | "remove"
  ) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
};

export default TextEditorList;
