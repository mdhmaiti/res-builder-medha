import { useEffect, useState } from 'react';

import { StyledButton } from '../atoms';
import { IoMdDownload } from 'react-icons/io';

export const ExportAsDocx = () => {
  let [elementVal, setTextContent] = useState('false');

  useEffect(() => {
    let element = document.getElementById('source-html');
    if (element) {
      setTextContent(element.innerHTML);
    }
  }, []);

  return (
    <StyledButton
      variant="outlined"
      id="btn-export"
      className="bg-cyan-700"
      onClick={() => {
        let header =
          "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
          "xmlns:w='urn:schemas-microsoft-com:office:word' " +
          "xmlns='http://www.w3.org/TR/REC-html40'>" +
          "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        let footer = '</body></html>';
        let sourceHTML = header + elementVal + footer;
        let source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        let fileDownload = document.createElement('a');
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'document.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
      }}
    >
      Export as Docx
    </StyledButton>
  );
};
