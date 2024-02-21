import React, { Fragment } from 'react';
import { useBasicDetails } from 'src/stores/basic';
import BasicHeader from './components/BasicHeader';
import BasicPanel from './components/BasicPanel';
import Checkbox from '@mui/material/Checkbox';
import { useCounter } from 'src/stores/useCounter';
import { useTipPersonal } from 'src/stores/useTip';
import { Button } from '@mui/material';
const tabTitles = ['Contacts', 'Links', 'About'];

const BasicLayout = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const basicTabs = useBasicDetails((state) => state.values);
  const onChangeText = useBasicDetails.getState().reset;

  const changeActiveTab = (event: React.SyntheticEvent, activeTab: number) => {
    setActiveTab(activeTab);
  };
  const { increaseCounter, decreaseCounter } = useCounter();
  const handleCounterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      increaseCounter(); // Increase counter if checked
    } else {
      decreaseCounter(); // Decrease counter if unchecked
    }
  };
  const { isTipVisible1, showTip, hideTip } = useTipPersonal();

  return (
    <Fragment>
      {/* <div className="flex flex-row  items-center gap-2">
        {' '}
        <Checkbox
          onChange={handleCounterChange}
          checked={useCounter.getState().counter > 0}
          disabled={useCounter.getState().counter > 2}
        />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div> */}
      <Button variant="contained" onClick={isTipVisible1 ? hideTip : showTip}>
        {isTipVisible1 ? 'Hide Tip' : 'Show Tip'}
      </Button>
      <BasicHeader
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
        tabTitles={tabTitles}
      ></BasicHeader>
      <BasicPanel
        activeTab={activeTab}
        basicTabs={basicTabs}
        onChangeText={onChangeText}
      ></BasicPanel>
      <div className="flex flex-row mt-3 items-center gap-2">
        {' '}
        <Checkbox
          onChange={handleCounterChange}
          checked={useCounter.getState().counter > 0}
          disabled={useCounter.getState().counter > 1}
        />
        <span className="text-slate-100 text-xl font-bold"> check if complete</span>
      </div>
    </Fragment>
  );
};

export default BasicLayout;
