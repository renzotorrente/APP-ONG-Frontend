import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function ContentEditor(props: any) {
  const { formContent, setFormContent } = props;

  useEffect(() => {}, []);
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        id="header"
        config={{
          toolbar: ['heading', '|', 'bold', 'italic', 'blockQuote','toggleImageCaption', 'imageTextAlternative', 'link', 'insertTable','tableColumn', 'tableRow', 'mergeTableCells', '|', 'undo', 'redo'],
          indentBlock: {
            offset: 4,
            unit: 'em'
          }
        }}
        data={formContent}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          setFormContent(data);
        }}
      />
    </>
  );
}
