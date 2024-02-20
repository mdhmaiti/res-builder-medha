//company
import { useEffect, useState } from 'react';
import { useVoluteeringStore } from 'src/stores/volunteering';
import AddVolunteeringExp from './components/AddVolunteering';
import Volunteering from './components/Volunteer';

import MoveEditSection from 'src/helpers/common/components/MoveEditSectionContainer';
import { useCounter } from 'src/stores/useCounter';
import Checkbox from '@mui/material/Checkbox';

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

  return (
    <div className="flex flex-col gap-8 mb-8">
      <div className="flex flex-row  items-center gap-2">
        {' '}
        <Checkbox onChange={handleCounterChange} checked={useCounter.getState().counter > 5} />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div>
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
    </div>
  );
};

export default VolunteeringLayout;
