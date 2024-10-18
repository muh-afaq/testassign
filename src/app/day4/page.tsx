import TextEditer from "@/components/day4/TextEditer";
import TextEditorList from "@/components/day4/TextEditorList";
import React from "react";

const page = () => {
  return (
    <div>
        <h1>First Task Text Editer</h1>
      <TextEditer texteditable='Text Editer' />
      <h1> Scoend Task Text Editors List</h1>
      <TextEditorList />
    </div>
  );
};

export default page;
