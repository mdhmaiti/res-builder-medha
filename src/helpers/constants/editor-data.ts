import BasicLayout from 'src/modules/builder/editor/modules/basic/BasicLayout';
import SkillsLayout from 'src/modules/builder/editor/modules/skills/SkillsLayout';
import EducationLayout from 'src/modules/builder/editor/modules/education/EducationLayout';
import ExperienceLayout from 'src/modules/builder/editor/modules/experience/ExperienceLayout';
import ActivitiesLayout from 'src/modules/builder/editor/modules/activities/ActivitiesLayout';
import VolunteeringLayout from 'src/modules/builder/editor/modules/volunteering/VolunteeringLayout';
import AwardsLayout from 'src/modules/builder/editor/modules/awards/AwardsLayout';

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element };
} = {
  'basic-details': { title: 'Personal details', component: BasicLayout },
  'skills-and-expertise': {
    title: 'Skills and Expertise',
    component: SkillsLayout,
  },
  education: { title: 'Education', component: EducationLayout },
  experience: { title: 'Experience', component: ExperienceLayout },
  activities: { title: 'Activities', component: ActivitiesLayout },
  volunteering: { title: 'Projects', component: VolunteeringLayout },
  awards: { title: 'Awards', component: AwardsLayout },
};
