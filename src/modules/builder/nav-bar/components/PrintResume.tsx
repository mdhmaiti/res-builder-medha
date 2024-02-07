import { useEffect } from 'react';

import { StyledButton } from '../atoms';
import { IoMdDownload } from 'react-icons/io';

export const PrintResume = () => {
  useEffect(() => {
    globalThis?.addEventListener('beforeprint', () => {
      globalThis.document.title = `Resume_Builder_${Date.now()}`;
    });

    globalThis?.addEventListener('afterprint', () => {
      globalThis.document.title = 'Single Page Resume Builder';
    });
  }, []);

  return (
    <StyledButton onClick={globalThis?.print} variant="outlined">
      <IoMdDownload size="1.5rem" className='mr-2'/>
      Download
    </StyledButton>
  );
};
