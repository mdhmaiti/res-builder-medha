import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import { IActivityTab } from '../ActivitiesLayout';

const BasicPanel = ({ activeTab }: { activeTab: IActivityTab }) => {
  const ActiveTabComponent = activeTab.component;

  return (
    <Fragment>
      <Box
        component="form"
        className=" bg-orange-50 hover:bg-slate-50 shadow-md shadow-slate-700 py-3 rounded-md"
        sx={{
          '& > :not(style)': { margin: '0.5rem 0' },
          // backgroundColor: 'rgb(231 238 250)',
          display: 'flex',
          flexDirection: 'column',
        }}
        noValidate
        autoComplete="off"
      >
        <ActiveTabComponent />
      </Box>
    </Fragment>
  );
};

export default BasicPanel;
