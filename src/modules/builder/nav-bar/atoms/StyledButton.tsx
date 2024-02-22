import { Button, styled, alpha } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: '#E7EEFA',
  borderColor: alpha('#E7EEFA', 0.8),
  ':hover': {
    borderColor: '#59748F',
    backgroundColor: alpha('#59748F', 0.04),
    color: '#59748F',
  },
}));
