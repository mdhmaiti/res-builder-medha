import { useEffect, useState } from 'react';
import { useEducations } from 'src/stores/education';
import AddEducation from './components/AddEducation';
import Education from './components/Education';

import MoveEditSection from 'src/helpers/common/components/MoveEditSectionContainer';
import { useCounter } from 'src/stores/useCounter';
import Checkbox from '@mui/material/Checkbox';
import { useTipEducation } from 'src/stores/useTip';
import { Button } from '@mui/material';

const EducationLayout = () => {
  const allAcademics = useEducations((state) => state.academics);
  const removeEducation = useEducations.getState().remove;
  const onMoveUp = useEducations.getState().onmoveup;
  const onMoveDown = useEducations.getState().onmovedown;

  const [expanded, setExpanded] = useState<string | false>(false);
  const { increaseCounter, decreaseCounter } = useCounter();
  useEffect(() => {
    setExpanded(allAcademics[0]?.id);
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
  const { isTipVisible3, showTip3, hideTip3 } = useTipEducation();
  return (
    <div className="flex flex-col gap-8 mb-8">
      {/* <div className="flex flex-row  items-center gap-2">
        {' '}
        <Checkbox onChange={handleCounterChange} checked={useCounter.getState().counter > 2} />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div> */}
      <Button variant="contained" onClick={isTipVisible3 ? hideTip3 : showTip3}>
        {isTipVisible3 ? 'Hide Tip' : 'Show Tip'}
      </Button>

      {allAcademics.map((education, index) => (
        <MoveEditSection
          key={education.id}
          title={education.institution || 'Education'}
          expanded={expanded === education.id}
          length={allAcademics.length}
          index={index}
          clickHandler={() => handleChange(education.id, expanded !== education.id)}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onDelete={removeEducation}
        >
          <Education educationInfo={education} currentIndex={index} />
        </MoveEditSection>
      ))}
      <AddEducation handleChange={handleChange} isEmpty={allAcademics.length === 0} />
      <div className="flex flex-row mt-3 items-center gap-2">
        {' '}
        <Checkbox
          onChange={handleCounterChange}
          checked={useCounter.getState().counter > 2}
          disabled={useCounter.getState().counter > 3}
        />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div>
    </div>
  );
};

export default EducationLayout;
