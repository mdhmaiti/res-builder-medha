import {
  useDatabases,
  useFrameworks,
  useLanguages,
  useLibraries,
  usePractices,
  useTechnologies,
  useTools,
  useGeneralSkills,
} from 'src/stores/skills';

import ResumeData from 'src/helpers/constants/resume-data.json';
import EmptyData from 'src/helpers/constants/empty-data.json';
import { useActivity } from './activity';
import { useAwards } from './awards';
import { useBasicDetails } from './basic';
import { useEducations } from './education';
import { useExperiences } from './experience';
import { useVoluteeringStore } from './volunteering';

export const useResumeStore = () => {
  return {
    ...ResumeData,
    basics: useBasicDetails((state) => state.values),
    work: useExperiences((state) => state.experiences),
    education: useEducations((state) => state.academics),
    awards: useAwards((state) => state.awards),
    volunteer: useVoluteeringStore((state) => state.volunteeredExps),
    skills: {
      skill: useGeneralSkills((state) => state.get()),
      languages: useLanguages((state) => state.get()),
      frameworks: useFrameworks((state) => state.get()),
      technologies: useTechnologies((state) => state.get()),
      libraries: useLibraries((state) => state.get()),
      databases: useDatabases((state) => state.get()),
      practices: usePractices((state) => state.get()),
      tools: useTools((state) => state.get()),
    },
    activities: useActivity((state) => state.get()),
  };
};

/**
 * @description Reset all the stores
 */
export const resetResumeStore = () => {
  useBasicDetails.getState().reset(EmptyData.basics);
  useGeneralSkills.getState().reset(EmptyData.skills.skill);
  useLanguages.getState().reset(EmptyData.skills.languages);
  useFrameworks.getState().reset(EmptyData.skills.frameworks);
  useLibraries.getState().reset(EmptyData.skills.libraries);
  useDatabases.getState().reset(EmptyData.skills.databases);
  useTechnologies.getState().reset(EmptyData.skills.technologies);
  usePractices.getState().reset(EmptyData.skills.practices);
  useTools.getState().reset(EmptyData.skills.tools);
  useExperiences.getState().reset(EmptyData.work);
  useEducations.getState().reset(EmptyData.education);
  useVoluteeringStore.getState().reset(EmptyData.volunteer);
  useAwards.getState().reset(EmptyData.awards);
  useActivity.getState().reset(EmptyData.activities);
};
// original prefilled data
// export const resetResumeStore = () => {
//   useBasicDetails.getState().reset(ResumeData.basics);
//   useGeneralSkills.getState().reset(ResumeData.skills.skill);
//   useLanguages.getState().reset(ResumeData.skills.languages);
//   useFrameworks.getState().reset(ResumeData.skills.frameworks);
//   useLibraries.getState().reset(ResumeData.skills.libraries);
//   useDatabases.getState().reset(ResumeData.skills.databases);
//   useTechnologies.getState().reset(ResumeData.skills.technologies);
//   usePractices.getState().reset(ResumeData.skills.practices);
//   useTools.getState().reset(ResumeData.skills.tools);
//   useExperiences.getState().reset(ResumeData.work);
//   useEducations.getState().reset(ResumeData.education);
//   useVoluteeringStore.getState().reset(ResumeData.volunteer);
//   useAwards.getState().reset(ResumeData.awards);
//   useActivity.getState().reset(ResumeData.activities);
// };
