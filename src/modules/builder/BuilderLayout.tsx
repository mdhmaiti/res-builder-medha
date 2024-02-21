import EditorLayout from './editor/EditorLayout';
import EditorLayoutRight from './editor/EditorLayoutRight';
import Image from 'next/image';
import NavBarLayout from './nav-bar/NavBarLayout';
import ResumeHeader from './resume/components/ResumeHeader';
import { ResumeLayout } from './resume/ResumeLayout';
import Tooltip from '@mui/material/Tooltip';
import Counter from './editor/ProgressbarCount';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Tip from './editor/Tip';

const BuilderLayout = () => {
  const [showEditorRight, setShowEditorRight] = useState(true);
  const toggleEditorRight = () => {
    setShowEditorRight(!showEditorRight); // Toggle the state variable
  };
  return (
    <div className="flex flex-col h-screen">
      <NavBarLayout />

      <main className="flex flex-1 max-h-[calc(100vh_-_5.5rem)] print:max-h-fit relative">
        <aside className="w-[22vw] min-w-[15rem] max-w-[21vw] print:hidden ">
          <EditorLayout />
        </aside>
        {/* <div className="absolute top-0 left-20 z-20">
          <Tip />
        </div> */}

        <div className="min-w-[30vw] flex flex-col flex-1 justify-center bg-custom-grey100 print:bg-white">
          {/* button to show and hide editor */}
          <Button
            onClick={toggleEditorRight}
            className=" fixed bottom-12 right-5 bg-slate-400 z-10"
            variant="contained"
            color="primary"
          >
            {showEditorRight ? 'Hide Editor' : 'Show Editor'}
          </Button>
          <header className="w-[21mm] mt-5 mb-3 mx-auto print:hidden">
            <ResumeHeader />
            {/* <div className="w-full h-15 bg-cyan-950 text-center"> pwoihfbrb</div> */}
          </header>

          <div className="overflow-auto no-scrollbar">
            {/* <Counter /> */}
            <ResumeLayout />
          </div>
        </div>
        {/* Toggle visibility based on showEditorRight state */}
        {showEditorRight && (
          <aside
            className={`w-fit print:hidden transition-transform transform ${
              showEditorRight
                ? 'translate-x-0 transition ease-out duration-500'
                : '-translate-x-full transition ease-in duration-300'
            }`}
          >
            <EditorLayoutRight />
          </aside>
        )}
      </main>

      {/* 
      w-[16vw] min-w-[12rem] 
      <footer className="print:hidden">
        <Tooltip title="Share feedback">
          <a
            href="https://forms.gle/YmpXEZLk6LYdnqet7"
            target="_blank"
            rel="noreferrer"
            className="fixed w-14 h-14 rounded-full bottom-4 left-4 flex justify-center items-center bg-resume-50 shadow-level-4dp"
          >
            <Image src="/icons/rate-review.svg" alt="Feedback button" width="24" height="24" />
          </a>
        </Tooltip>
      </footer> */}
    </div>
  );
};

export default BuilderLayout;
