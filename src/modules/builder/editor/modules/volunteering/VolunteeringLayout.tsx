//projects
import { useEffect, useState } from 'react';
import { useVoluteeringStore } from 'src/stores/volunteering';
import AddVolunteeringExp from './components/AddVolunteering';
import Volunteering from './components/Volunteer';

import MoveEditSection from 'src/helpers/common/components/MoveEditSectionContainer';
import { useCounter } from 'src/stores/useCounter';
import Checkbox from '@mui/material/Checkbox';
import { useTipProjects } from 'src/stores/useTip';
import { Button } from '@mui/material';

const VolunteeringLayout = () => {
  const allVolunteeringExps = useVoluteeringStore((state) => state.volunteeredExps);
  const removeExperience = useVoluteeringStore.getState().remove;
  const onMoveUp = useVoluteeringStore.getState().onmoveup;
  const onMoveDown = useVoluteeringStore.getState().onmovedown;

  const [expanded, setExpanded] = useState<string | false>(false);

  useEffect(() => {
    setExpanded(allVolunteeringExps[0]?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  const { isTipVisible6, showTip, hideTip } = useTipProjects();

  return (
    <div className="flex flex-col gap-8 mb-8">
      {/* <div className="flex flex-row  items-center gap-2">
        {' '}
        <Checkbox onChange={handleCounterChange} checked={useCounter.getState().counter > 5} />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div> */}
      <Button variant="contained" onClick={isTipVisible6 ? hideTip : showTip}>
        {isTipVisible6 ? 'Hide Tip' : 'Show Tip'}
      </Button>
      {allVolunteeringExps.map((volunteeringInfo, index) => (
        <MoveEditSection
          key={volunteeringInfo.id}
          title={volunteeringInfo.organization || 'Project'}
          expanded={expanded === volunteeringInfo.id}
          length={allVolunteeringExps.length}
          index={index}
          clickHandler={() => handleChange(volunteeringInfo.id, expanded !== volunteeringInfo.id)}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onDelete={removeExperience}
        >
          <Volunteering volunteeringInfo={volunteeringInfo} currentIndex={index} />
        </MoveEditSection>
      ))}
      <AddVolunteeringExp handleChange={handleChange} isEmpty={allVolunteeringExps.length === 0} />
      <div className="flex flex-row mt-3 items-center gap-2">
        {' '}
        <Checkbox
          onChange={handleCounterChange}
          checked={useCounter.getState().counter > 5}
          disabled={useCounter.getState().counter > 6}
        />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div>
    </div>
  );
};

export default VolunteeringLayout;
