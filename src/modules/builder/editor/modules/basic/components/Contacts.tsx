import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';

const Contacts = ({
  basicTabs,
  onChangeHandler,
}: {
  basicTabs: any;
  onChangeHandler: (value: any, key: string) => void;
}) => {
  const [characterCounts, setCharacterCounts] = useState<any>({});

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    key: string,
    maxLength: number
  ) => {
    const value = event.target.value;
    if (value.length <= maxLength) {
      onChangeHandler(value, key);
      setCharacterCounts({ ...characterCounts, [key]: value.length });
    }
  };

  return (
    <Fragment>
      <TextField
        label="Name"
        variant="filled"
        value={basicTabs.name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'name');
        }}
      />

      {/* <TextField
        label="Image URL"
        variant="filled"
        value={basicTabs.image}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'image');
        }}
      /> */}
      <TextField
        label="Title"
        variant="filled"
        value={basicTabs.label}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'label');
        }}
      />
      <TextField
        label="Email"
        variant="filled"
        value={basicTabs.email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'email');
        }}
      />
      <TextField
        label="Website URL"
        variant="filled"
        value={basicTabs.url}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'url');
        }}
      />
      {/* <TextField
        label="Phone"
        variant="filled"
        value={basicTabs.phone}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'phone');
        }}
      /> */}

      <TextField
        label="Phone"
        variant="filled"
        value={basicTabs.phone}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          handleInputChange(event, 'phone', 15);
        }}
        InputProps={{
          endAdornment: (
            <div style={{ color: 'gray', fontSize: '0.75rem' }}>
              {characterCounts['phone'] ?? 0}/{15}
            </div>
          ),
        }}
      />

      <TextField
        label="Location"
        variant="filled"
        value={basicTabs.location.city}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const location = basicTabs.location;
          location.city = event.target.value;
          onChangeHandler(location, 'location');
        }}
      />
      <TextField
        label="Relevant Experience (in years)"
        variant="filled"
        value={basicTabs.relExp}
        type="number"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'relExp');
        }}
      />
      <TextField
        label="Total Experience (in years)"
        variant="filled"
        value={basicTabs.totalExp}
        type="number"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'totalExp');
        }}
      />
    </Fragment>
  );
};

export default Contacts;
