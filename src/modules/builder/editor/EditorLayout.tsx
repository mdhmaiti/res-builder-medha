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
import { useCounter } from 'src/stores/useCounter';

const EditorLayout = () => {
  const [link, setLink] = useState('');
  const { counter, setCounter } = useCounter();
  // client don't want this const [showTip, setShowTip] = useState(false); // State to track the visibility of the Tip

  const section = headers[link];

  const linkClickHandler = (link: string) => {
    setLink(link);
  };

  const resetCounter = () => {
    // Here, we directly set the counter value to 0 using the set function provided by useCounter
    setCounter(0);
  };
  // Function to toggle visibility of the Tip
  // const toggleTip = () => {
  //   setShowTip(!showTip);
  // };

  const displayElement = link ? (
    <EditSection section={section} onLinkClick={linkClickHandler} />
  ) : (
    <div>
      <DataHeaders onLinkClick={linkClickHandler} />
    </div>
  );

  return (
    <div className="h-full p-1 overflow-auto relative no-scrollbar shadow-level-4dp bg-orange-500/80 text-xs">
      {/* Button to toggle visibility of the Tip */}
      {/* Display the Tip component if showTip is true */}
      {/* {showTip && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Tip />
        </div>
      )} */}
      {displayElement}

      <div className="mt-8 flex flex-row items-center gap-4 text-white p-2 m-2">
        <OutlinedButton
          onClick={() => {
            resetResumeStore();
            resetCounter();
          }}
        >
          <IoArrowUndo size="1.2rem" />
          <span className="ml-3">Reset</span>
        </OutlinedButton>
        {/* Button to toggle visibility of the Tip */}

        {/* <Button variant="outlined" className="text-slate-100 border-slate-200" onClick={toggleTip}>
          {showTip ? 'Hide Tip' : 'Show Tip'}
        </Button> */}
      </div>
    </div>
  );
};

export default EditorLayout;
