import { useEffect, useState } from 'react';
import { useExperiences } from 'src/stores/experience';
import AddExperience from './components/AddExperience';
import Experience from './components/Experience';

import MoveEditSection from 'src/helpers/common/components/MoveEditSectionContainer';
import { useCounter } from 'src/stores/useCounter';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { useTipExperience } from 'src/stores/useTip';

const ExperienceLayout = () => {
  const allWorks = useExperiences((state) => state.experiences);
  const removeExperience = useExperiences.getState().remove;
  const onMoveUp = useExperiences.getState().onmoveup;
  const onMoveDown = useExperiences.getState().onmovedown;

  const [expanded, setExpanded] = useState<string | false>(false);
  const { increaseCounter, decreaseCounter } = useCounter();

  useEffect(() => {
    setExpanded(allWorks[0]?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleCounterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      increaseCounter(); // Increase counter if checked
    } else {
      decreaseCounter(); // Decrease counter if unchecked
    }
  };
  const { isTipVisible4, showTip, hideTip } = useTipExperience();
  return (
    <div className="flex flex-col gap-8 mb-8">
      {/* <div className="flex flex-row  items-center gap-2">
        {' '}
        <Checkbox onChange={handleCounterChange} checked={useCounter.getState().counter > 3} />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div> */}
      <Button variant="contained" onClick={isTipVisible4 ? hideTip : showTip}>
        {isTipVisible4 ? 'Hide Tip' : 'Show Tip'}
      </Button>
      {allWorks.map((work, index) => (
        <MoveEditSection
          key={work.id}
          title={work.name || 'Experience'}
          expanded={expanded === work.id}
          length={allWorks.length}
          index={index}
          clickHandler={() => handleChange(work.id, expanded !== work.id)}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onDelete={removeExperience}
        >
          <Experience experienceInfo={work} currentIndex={index} />
        </MoveEditSection>
      ))}
      <AddExperience handleChange={handleChange} isEmpty={allWorks.length === 0} />
      <div className="flex flex-row mt-3 items-center gap-2">
        {' '}
        <Checkbox
          onChange={handleCounterChange}
          checked={useCounter.getState().counter > 3}
          disabled={useCounter.getState().counter > 4}
        />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div>
    </div>
  );
};

export default ExperienceLayout;
