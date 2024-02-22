import EditorLayout from './editor/EditorLayout';
import EditorLayoutRight from './editor/EditorLayoutRight';
import Image from 'next/image';
import NavBarLayout from './nav-bar/NavBarLayout';
import ResumeHeader from './resume/components/ResumeHeader';
import { ResumeLayout } from './resume/ResumeLayout';
import Tooltip from '@mui/material/Tooltip';
import Counter from './editor/ProgressbarCount';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Tip from './editor/Tip';
import {
  useTipAchievements,
  useTipEducation,
  useTipExperience,
  useTipPersonal,
  useTipProjects,
  useTipSkillExp,
} from 'src/stores/useTip';

const BuilderLayout = () => {
  const [showEditorRight, setShowEditorRight] = useState(true);
  const toggleEditorRight = () => {
    setShowEditorRight(!showEditorRight); // Toggle the state variable
  };
  const { isTipVisible1, hideTip1, showTip1 } = useTipPersonal();
  const { isTipVisible2, hideTip2, showTip2 } = useTipSkillExp();
  const { isTipVisible3, hideTip3, showTip3 } = useTipEducation();
  const { isTipVisible4, hideTip4, showTip4 } = useTipExperience();
  const { isTipVisible5, hideTip5, showTip5 } = useTipAchievements();
  const { isTipVisible6, hideTip6, showTip6 } = useTipProjects();

  // tis use state is for the tip rendering one at a time
  useEffect(() => {
    const unsubscribe1 = useTipPersonal.subscribe(
      (isTipVisible1) => {
        if (isTipVisible1) {
          showTip1();
          hideTip2();
          hideTip3();
          hideTip4();
          hideTip5();
          hideTip6();
        }
      },
      (state) => state.isTipVisible1
    );

    const unsubscribe2 = useTipSkillExp.subscribe(
      (isTipVisible2) => {
        if (isTipVisible2) {
          showTip2();
          hideTip3();
          hideTip4();
          hideTip5();
          hideTip6();
          hideTip1();
        }
      },
      (state) => state.isTipVisible2
    );
    // education
    const unsubscribe3 = useTipEducation.subscribe(
      (isTipVisible3) => {
        if (isTipVisible3) {
          showTip3();
          hideTip2();
          hideTip4();
          hideTip5();
          hideTip6();
          hideTip1();
        }
      },
      (state) => state.isTipVisible3
    );
    // experience

    const unsubscribe4 = useTipExperience.subscribe(
      (isTipVisible4) => {
        if (isTipVisible4) {
          showTip4();
          hideTip2();
          hideTip2();
          hideTip3();
          hideTip5();
          hideTip6();
          hideTip1();
        }
      },
      (state) => state.isTipVisible4
    );
    //achievements

    const unsubscribe5 = useTipAchievements.subscribe(
      (isTipVisible5) => {
        if (isTipVisible5) {
          showTip5();
          hideTip2();
          hideTip2();
          hideTip3();
          hideTip4();
          hideTip6();
          hideTip1();
        }
      },
      (state) => state.isTipVisible5
    );
    //projects

    const unsubscribe6 = useTipProjects.subscribe(
      (isTipVisible6) => {
        if (isTipVisible6) {
          showTip6();
          hideTip2();
          hideTip2();
          hideTip3();
          hideTip4();
          hideTip5();
          hideTip1();
        }
      },
      (state) => state.isTipVisible6
    );

    return () => {
      // unsubscribe
      unsubscribe1();
      unsubscribe2();
      unsubscribe3();
      unsubscribe4();
      unsubscribe5();
      unsubscribe6();
    };
  }, [
    hideTip1,
    hideTip2,
    hideTip3,
    hideTip4,
    hideTip5,
    hideTip6,
    showTip1,
    showTip2,
    showTip3,
    showTip4,
    showTip5,
    showTip6,
  ]);

  // useEffect(() => {}, [
  //   hideTip1,
  //   hideTip2,
  //   hideTip3,
  //   hideTip4,
  //   hideTip5,
  //   hideTip6,
  //   isTipVisible1,
  //   isTipVisible2,
  //   isTipVisible3,
  //   isTipVisible4,
  //   isTipVisible5,
  //   isTipVisible6,
  //   showTip1,
  //   showTip2,
  //   showTip3,
  //   showTip4,
  //   showTip5,
  //   showTip6,
  // ]);
  return (
    <div className="flex flex-col h-screen">
      <NavBarLayout />

      <main className="flex flex-1 max-h-[calc(100vh_-_5.5rem)] print:max-h-fit relative ">
        <aside className="w-[22vw] min-w-[15rem] max-w-[21vw] print:hidden ">
          <EditorLayout />
        </aside>
        {/* <div className="absolute top-0 left-20 z-20">
          <Tip />
        </div> */}
        {/* another solution */}
        <div className="bg-custom-grey100 flex flex-col justify-center ">
          <div className="flex flex-col max-h-96 overflow-hidden hover:overflow-auto mx-2 shadow-md shadow-slate-500 gap-3 print:hidden">
            {isTipVisible6 && (
              <Tip
                title={'Tips for projects'}
                desc1={'Mention the impact of your projects'}
                desc2={'Dont forget to add all the unique features'}
                desc3={' Whenever possible, quantify your achievements.'}
              />
            )}

            {isTipVisible1 && (
              <Tip
                title={'Tips for Personal details'}
                desc1={'Opt for Gmail as email provider for better result .'}
                desc2={'Provide Mobile Number which is properly working.'}
                desc3={'Make sure links are properly working and redirect to idented page.'}
              />
            )}

            {isTipVisible2 && (
              <Tip
                title={'Tips for expertise'}
                desc1={
                  'Highlight the skills that are most relevant to the position of the job description.'
                }
                desc2={'Organize your skills into relevant categories.'}
                desc3={'Limit the number of skills listed to the most relevant and impactful ones.'}
              />
            )}
            {isTipVisible3 && (
              <Tip
                title={'Tips for education'}
                desc1={'Include the dates of attendance for each degree.'}
                desc2={
                  'Make sure all the information provided in the education section is accurate.'
                }
                desc3={'Be concise and to the point in your education section.'}
              />
            )}
            {isTipVisible4 && (
              <Tip
                title={'Tips for experience'}
                desc1={'Whenever possible, quantify your accomplishments with numbers.'}
                desc2={
                  'Customize your experience section to emphasize the skills and accomplishments.'
                }
                desc3={'Start each bullet point with a strong action verb.'}
              />
            )}
            {isTipVisible5 && (
              <Tip
                title={'Tips for achievements'}
                desc1={'Focus on achievements that are relevant to the job.'}
                desc2={'Place greater emphasis on your most recent achievements.'}
                desc3={'Ensure that your achievements are truthful.'}
              />
            )}
          </div>
        </div>

        <div className="min-w-[30vw] flex flex-col flex-1 justify-center bg-custom-grey100 print:bg-white ">
          {/* button to show and hide editor */}
          {/* <Button
            onClick={toggleEditorRight}
            className=" fixed bottom-12 right-5 bg-slate-400 z-10"
            variant="contained"
            color="primary"
          >
            {showEditorRight ? 'Hide Editor' : 'Show Editor'}
          </Button> */}
          <header className="w-[21mm] mt-5 mb-3 mx-auto print:hidden ">
            <ResumeHeader />
            {/* <div className="w-full h-15 bg-cyan-950 text-center"> pwoihfbrb</div> */}
          </header>

          <div className="overflow-auto no-scrollbar">
            {/* <Counter /> */}
            <ResumeLayout />
          </div>
        </div>
        {/* Toggle visibility based on showEditorRight state */}
        {/* 
        <aside
          className={`w-fit print:hidden transition-transform transform ${
            showEditorRight
              ? 'translate-x-0 transition ease-out duration-500'
              : '-translate-x-full transition ease-in duration-300'
          }`}
        >
          <EditorLayoutRight />
        </aside> */}

        {/* another tip solution */}
        {/* <aside className="bg-transparent absolute top-20 left-80  ">
          <div className="flex flex-col max-h-96 overflow-hidden hover:overflow-auto  gap-3">
            {isTipVisible6 && (
              <Tip
                title={'Tips for projects'}
                desc1={'Opt for Gmail as email provider for better result .'}
                desc2={'Provide Mobile Number which is properly working.'}
                desc3={'Make sure links are properly working and redirect to idented page.'}
              />
            )}

            {isTipVisible1 && (
              <Tip
                title={'Tips for Personal details'}
                desc1={'Opt for Gmail as email provider for better result .'}
                desc2={'Provide Mobile Number which is properly working.'}
                desc3={'Make sure links are properly working and redirect to idented page.'}
              />
            )}

            {isTipVisible2 && (
              <Tip
                title={'Tips for expertise'}
                desc1={'Opt for Gmail as email provider for better result .'}
                desc2={'Provide Mobile Number which is properly working.'}
                desc3={'Make sure links are properly working and redirect to idented page.'}
              />
            )}
            {isTipVisible3 && (
              <Tip
                title={'Tips for education'}
                desc1={'Opt for Gmail as email provider for better result .'}
                desc2={'Provide Mobile Number which is properly working.'}
                desc3={'Make sure links are properly working and redirect to idented page.'}
              />
            )}
            {isTipVisible4 && (
              <Tip
                title={'Tips for experience'}
                desc1={'Opt for Gmail as email provider for better result .'}
                desc2={'Provide Mobile Number which is properly working.'}
                desc3={'Make sure links are properly working and redirect to idented page.'}
              />
            )}
            {isTipVisible5 && (
              <Tip
                title={'Tips for achievements'}
                desc1={'Opt for Gmail as email provider for better result .'}
                desc2={'Provide Mobile Number which is properly working.'}
                desc3={'Make sure links are properly working and redirect to idented page.'}
              />
            )}
          </div>
        </aside> */}
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
