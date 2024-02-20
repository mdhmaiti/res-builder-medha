import React, { useState } from 'react';
import DataHeaders from './components/EditHeaders';
import EditSection from './components/EditSection';
import ErrorBoundary from 'src/helpers/common/components/ErrorBoundary';
import { OutlinedButton } from 'src/helpers/common/atoms/Buttons';
import { headers } from 'src/helpers/constants/editor-data';
import { resetResumeStore } from 'src/stores/useResumeStore';
import { IoArrowUndo } from 'react-icons/io5';
import Tip from './Tip';
import Button from '@mui/material/Button';

const EditorLayout = () => {
  const [link, setLink] = useState('');
  const [showTip, setShowTip] = useState(false); // State to track the visibility of the Tip

  const section = headers[link];

  const linkClickHandler = (link: string) => {
    setLink(link);
  };

  // Function to toggle visibility of the Tip
  const toggleTip = () => {
    setShowTip(!showTip);
  };

  const displayElement = link ? (
    <EditSection section={section} onLinkClick={linkClickHandler} />
  ) : (
    <DataHeaders onLinkClick={linkClickHandler} />
  );

  return (
    <div className="h-full p-1 overflow-auto relative no-scrollbar shadow-level-4dp bg-cyan-700 text-xs">
      {/* Button to toggle visibility of the Tip */}
      <div className="flex justify-end mb-4">
        <Button variant="outlined" className="text-slate-100 mt-2" onClick={toggleTip}>
          Show Tip
        </Button>
      </div>

      {/* Display the Tip component if showTip is true */}
      {showTip && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Tip />
        </div>
      )}

      {displayElement}

      <div className="mt-8 text-white p-2 m-2">
        <OutlinedButton onClick={resetResumeStore}>
          <IoArrowUndo size="1.2rem" />
          <span className="ml-3">Reset</span>
        </OutlinedButton>
      </div>
    </div>
  );
};

export default EditorLayout;
