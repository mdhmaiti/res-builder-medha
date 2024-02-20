import { useState } from 'react';
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
import EditSectionContainer from 'src/helpers/common/components/EditSectionContainer';
import Skill from './components/Skill';
import Checkbox from '@mui/material/Checkbox';
import { useCounter } from 'src/stores/useCounter';

const SkillsLayout = () => {
  const skillState = [
    useGeneralSkills(),
    useLanguages(),
    useFrameworks(),
    useLibraries(),
    useDatabases(),
    useTools(),
  ];

  const [expanded, setExpanded] = useState<string | false>('Languages');

  const handleChange = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { increaseCounter, decreaseCounter } = useCounter();
  const handleCounterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      increaseCounter(); // Increase counter if checked
    } else {
      decreaseCounter(); // Decrease counter if unchecked
    }
  };
  return (
    <div className="flex flex-col gap-8 mb-8">
      <div className="flex flex-row  items-center gap-2">
        {' '}
        <Checkbox onChange={handleCounterChange} checked={useCounter.getState().counter > 1} />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div>
      {skillState.map((state) => (
        <EditSectionContainer
          key={state.title}
          title={state.title}
          expanded={expanded === state.title}
          isEnabled={state.isEnabled}
          setIsEnabled={state.setIsEnabled}
          clickHandler={() => handleChange(state.title, expanded !== state.title)}
        >
          <Skill
            items={state.values}
            addItem={state.add}
            removeItem={state.remove}
            setItems={state.reset}
            hasLevel={state.hasLevel}
          />
        </EditSectionContainer>
      ))}
    </div>
  );
};

export default SkillsLayout;
