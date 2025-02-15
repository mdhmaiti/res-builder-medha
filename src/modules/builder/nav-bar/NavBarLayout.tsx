import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { NavBarActions, NavBarMenu, StyledButton } from './atoms';
import {
  useGeneralSkills,
  useDatabases,
  useFrameworks,
  useLanguages,
  useLibraries,
  usePractices,
  useTechnologies,
  useTools,
} from 'src/stores/skills';

import { AVAILABLE_TEMPLATES } from 'src/helpers/constants';
import DEFAULT_RESUME_JSON from 'src/helpers/constants/resume-data.json';
import Image from 'next/image';
import Link from 'next/link';
import { NavMenuItem } from './components/MenuItem';
import { PrintResume } from './components/PrintResume';
import { TemplateSelect } from './components/TemplateSelect';
import { ThemeSelect } from './components/ThemeSelect';
import { Toast } from 'src/helpers/common/atoms/Toast';
import exportFromJSON from 'export-from-json';
import { useActivity } from 'src/stores/activity';
import { useAwards } from 'src/stores/awards';
import { useBasicDetails } from 'src/stores/basic';
import { useEducations } from 'src/stores/education';
import { useExperiences } from 'src/stores/experience';
import { useVoluteeringStore } from 'src/stores/volunteering';
import { ExportAsDocx } from './components/ExportAsDocx';
import { useCounter } from 'src/stores/useCounter';

const TOTAL_TEMPLATES_AVAILABLE = Object.keys(AVAILABLE_TEMPLATES).length;

const NavBarLayout = () => {
  const [openToast, setOpenToast] = useState(false);
  const fileInputRef = useRef(null);

  const exportResumeData = useCallback(() => {
    const updatedResumeJson = {
      ...DEFAULT_RESUME_JSON,
      basics: {
        ...DEFAULT_RESUME_JSON.basics,
        ...useBasicDetails.getState().values,
      },
      work: useExperiences.getState().experiences,
      education: useEducations.getState().academics,
      awards: useAwards.getState().awards,
      volunteer: useVoluteeringStore.getState().volunteeredExps,
      skills: {
        skill: useGeneralSkills.getState().get(),
        languages: useLanguages.getState().get(),
        frameworks: useFrameworks.getState().get(),
        technologies: useTechnologies.getState().get(),
        libraries: useLibraries.getState().get(),
        databases: useDatabases.getState().get(),
        practices: usePractices.getState().get(),
        tools: useTools.getState().get(),
      },
      activities: useActivity.getState().activities,
    };
    const fileName = updatedResumeJson.basics.name + '_' + new Date().toLocaleString();
    const exportType = exportFromJSON.types.json;
    exportFromJSON({
      data: updatedResumeJson,
      fileName,
      exportType,
    });
  }, []);

  const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const reader = new FileReader();

    reader.readAsText(fileObj);

    event.target.value = ''; // To read the same file

    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        const uploadedResumeJSON = JSON.parse(e.target?.result);
        const {
          basics = {},
          skills = {},
          work = [],
          education = [],
          activities = {
            involvements: '',
            achievements: '',
          },
          volunteer = [],
          awards = [],
        } = uploadedResumeJSON;
        const {
          skill = [],
          languages = [],
          frameworks = [],
          libraries = [],
          databases = [],
          technologies = [],
          practices = [],
          tools = [],
        } = skills;
        useBasicDetails.getState().reset(basics);
        useGeneralSkills.getState().reset(skill);
        useLanguages.getState().reset(languages);
        useFrameworks.getState().reset(frameworks);
        useLibraries.getState().reset(libraries);
        useDatabases.getState().reset(databases);
        useTechnologies.getState().reset(technologies);
        usePractices.getState().reset(practices);
        useTools.getState().reset(tools);
        useExperiences.getState().reset(work);
        useEducations.getState().reset(education);
        useVoluteeringStore.getState().reset(volunteer);
        useAwards.getState().reset(awards);
        useActivity.getState().reset(activities);
        setOpenToast(true);
      }
    };
  }, []);
  // grabbing the global state
  const { counter } = useCounter();
  const handleIncompleteButtonClick = () => {
    alert('Please complete the progress first.');
  };

  return (
    <nav className="h-full w-full  #ffffff relative flex py-2.5 pl-5 pr-4 items-center shadow-level-8dp z-20 print:hidden">
      <Link href="/">
        <Image
          src={'/icons/resume-icon.png'}
          alt="logo"
          height="180"
          width="256"
          className="ml-20"
        />
      </Link>
      <div className="flex-auto flex justify-between items-center ml-5">
        <NavBarMenu>
          {/* <NavMenuItem
            caption={`choose a template`}
            popoverChildren={<TemplateSelect />}
          />
          <NavMenuItem caption="choose a colour" popoverChildren={<ThemeSelect />} /> */}
          <div></div>
        </NavBarMenu>
        <div className="flex flex-row gap-2 items-center">
          {/* <StyledButton variant="text" onClick={exportResumeData}>
            Export
          </StyledButton>
          <StyledButton
            variant="text"
            onClick={() => {
              if (fileInputRef.current) {
                const fileElement = fileInputRef.current as HTMLInputElement;
                fileElement.click();
              }
            }}
          >
            Import{' '}
            <input
              type="file"
              hidden
              ref={fileInputRef}
              accept="application/json"
              onChange={handleFileChange}
            />
          </StyledButton> */}
          {/* <NavMenuItem
            caption={`choose a template`}
            popoverChildren={<TemplateSelect />}
          />
          <NavMenuItem caption="choose a colour" popoverChildren={<ThemeSelect />} /> */}

          <ThemeSelect />
          {/* checks for progress */}
          {counter < 6 ? (
            <StyledButton
              className=" bg-orange-700"
              variant="text"
              onClick={handleIncompleteButtonClick}
            >
              Download
            </StyledButton>
          ) : (
            <PrintResume />
          )}

          {counter < 6 ? (
            <StyledButton
              className=" bg-orange-700"
              variant="text"
              onClick={handleIncompleteButtonClick}
            >
              Export as docx
            </StyledButton>
          ) : (
            <ExportAsDocx />
          )}
        </div>
      </div>
      <Toast
        open={openToast}
        onClose={() => {
          setOpenToast(false);
        }}
        content={'Resume data was successfully imported.'}
      />
    </nav>
  );
};

export default NavBarLayout;
