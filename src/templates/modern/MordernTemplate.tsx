import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { VolunteerSection } from './components/Volunteer';
import { Objective } from './components/Objective';
import { SkillsSection } from './components/Skills';
import { SummarySection } from './components/Summary';
import { WorkSection } from './components/Work';
import { AwardSection } from './components/Awards';
import { useContext } from 'react';
import { StateContext } from 'src/modules/builder/resume/ResumeLayout';
import { SectionValidator } from 'src/helpers/common/components/ValidSectionRenderer';
import Achievements from '../professional/components/Achievements';
import AchievementSection from './components/Achievements';

export default function MordernTemplate() {
  const resumeData = useContext(StateContext);

  return (
    <div className="p-1 ">
      <BasicIntro
        name={resumeData.basics.name}
        label={resumeData.basics.label}
        url={resumeData.basics.url}
        email={resumeData.basics.email}
        city={resumeData.basics.location.city}
        phone={resumeData.basics.phone}
        image={resumeData.basics.image}
        linkedin={resumeData.basics.profiles[0].url}
        twitter={resumeData.basics.profiles[1].url}
        github={resumeData.basics.profiles[2].url}
        // hackerrank={resumeData.basics.profiles[3].url}
        // hackerearth={resumeData.basics.profiles[4].url}
        // codechef={resumeData.basics.profiles[5].url}
        // leetcode={resumeData.basics.profiles[6].url}
      />

      <div className="flex h-full w-full gap-1">
        <div className="basis-[60%] p-3">
          <SectionValidator value={resumeData.basics.summary}>
            <SummarySection summary={resumeData.basics.summary} />
          </SectionValidator>
          <SectionValidator value={resumeData.work}>
            <WorkSection experience={resumeData.work} />
          </SectionValidator>
          <SectionValidator value={resumeData.volunteer}>
            <VolunteerSection volunteer={resumeData.volunteer} />
          </SectionValidator>
        </div>

        <div className="basis-[40%] p-3">
          <SectionValidator value={resumeData.basics.objective}>
            <Objective objective={resumeData.basics.objective} />
          </SectionValidator>
          <SectionValidator value={resumeData.skills.skill}>
            <SkillsSection title="Skills" list={resumeData.skills.skill} />
          </SectionValidator>
          <SectionValidator value={resumeData.skills.languages}>
            <SkillsSection title="Languages" list={resumeData.skills.languages} />
          </SectionValidator>
          <SectionValidator value={resumeData.skills.frameworks}>
            <SkillsSection title="Frameworks" list={resumeData.skills.frameworks} />
          </SectionValidator>
          <SectionValidator value={resumeData.skills.libraries}>
            <SkillsSection title="Libraries" list={resumeData.skills.libraries} />
          </SectionValidator>
          <SectionValidator value={resumeData.skills.databases}>
            <SkillsSection title="Databases" list={resumeData.skills.databases} />
          </SectionValidator>
          <SectionValidator value={resumeData.skills.tools}>
            <SkillsSection title="Tools" list={resumeData.skills.tools} />
          </SectionValidator>
          <SectionValidator value={resumeData.education}>
            <EducationSection education={resumeData.education} />
          </SectionValidator>
          <SectionValidator value={resumeData.activities.achievements}>
            <AchievementSection data={resumeData.activities.achievements} />
          </SectionValidator>
        </div>
      </div>
    </div>
  );
}
