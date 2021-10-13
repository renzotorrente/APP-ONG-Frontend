import React from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Box } from '@chakra-ui/layout';

export function Editor({handlechange ,content}:{handlechange:Function, content?:any}):JSX.Element{

    return (
       <Box maxW="700px" maxH="700px">
       <CKEditor
       wit
        editor={ClassicEditor}
        id="header"
        config={{
          toolbar: ['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'insertTable','tableColumn', 'tableRow', 'mergeTableCells', '|', 'undo', 'redo'],
          indentBlock: {
            offset: 4,
            unit: 'em'
          },
        }}
        data={content}
        onChange={(event: any, editor: any) => {
          handlechange(editor.getData());
        }
  

      }
      />
      </Box>
    )
}