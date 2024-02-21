import { Divider, styled, alpha } from '@mui/material';
import Link from '@mui/material/Link';
import { OutlinedButton } from 'src/helpers/common/atoms/Buttons';

import { TemplateSlider } from './TemplatesSlider';
import { ThemeSelect } from './ThemeSelect';

// export const StyledLink = styled(Link)(({ theme }) => ({
//   color: theme.palette.resume[800],
//   borderColor: theme.palette.resume[100],
//   ':hover': {
//     borderColor: theme.palette.resume[800],
//     backgroundColor: alpha(theme.palette.resume[800], 0.04),
//   },
// }));

export const TemplateSelect = () => {
  return (
    <div className={`w-96 h-full flex flex-col  shadow-2xl`}>
      <ThemeSelect />

      <TemplateSlider />
      {/* <Divider /> */}
      <div></div>
    </div>
  );
};
