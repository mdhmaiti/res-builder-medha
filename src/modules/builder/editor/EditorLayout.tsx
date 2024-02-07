import React, { useState } from 'react';

import DataHeaders from './components/EditHeaders';
import EditSection from './components/EditSection';
import ErrorBoundary from 'src/helpers/common/components/ErrorBoundary';
import { OutlinedButton } from 'src/helpers/common/atoms/Buttons';
import { headers } from 'src/helpers/constants/editor-data';
import { resetResumeStore } from 'src/stores/useResumeStore';
import { IoArrowUndo } from 'react-icons/io5';

const EditorLayout = () => {
  const [link, setLink] = useState('');
  const section = headers[link];

  const linkClickHandler = (link: string) => {
    setLink(link);
  };

  const displayElement = link ? (
    <EditSection section={section} onLinkClick={linkClickHandler} />
  ) : (
    <DataHeaders onLinkClick={linkClickHandler} />
  );

  return (
    <ErrorBoundary>
      <div className=" h-full  p-6 overflow-auto relative no-scrollbar shadow-level-4dp bg-cyan-950">
        {displayElement}

        <div className="mt-8 text-white p-3 m-2">
          <OutlinedButton onClick={resetResumeStore}>
            {' '}
            <IoArrowUndo size="1.2rem" />{' '}
          </OutlinedButton>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default EditorLayout;
