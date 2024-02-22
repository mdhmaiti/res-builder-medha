import { Context, createContext, useEffect } from 'react';

import { AVAILABLE_TEMPLATES } from 'src/helpers/constants';
import { ThemeProvider } from '@mui/material/styles';
import { useResumeStore } from 'src/stores/useResumeStore';
import { useTemplates } from 'src/stores/useTemplate';
import { useThemes } from 'src/stores/themes';
import { useZoom } from 'src/stores/useZoom';
import ProgressbarCount from '../editor/ProgressbarCount';

// TODO: need to define types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let StateContext: Context<any> = createContext(null);

export const ResumeLayout = () => {
  const resumeData = useResumeStore();
  const zoom = useZoom((state) => state.zoom);

  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId].component;
  const selectedTheme = useThemes((state) => state.selectedTheme);
  StateContext = createContext(resumeData);

  useEffect(() => {
    const selectedTemplateId =
      localStorage.getItem('selectedTemplateId') || AVAILABLE_TEMPLATES['modern'].id;
    useTemplates.getState().setTemplate(AVAILABLE_TEMPLATES[selectedTemplateId]);
  }, []);

  return (
    <div className="mx-5 mb-2" id="source-html">
      <div
        style={{ transform: `scale(${zoom})` }}
        className="origin-top transition-all flex flex-col items-center duration-300 ease-linear"
      >
        <div className="mb-5 w-[210mm] print:hidden">
          <ProgressbarCount />
        </div>
        <div className="w-[210mm] h-[296mm] bg-white my-0 mx-auto print:mx-0 print:my-0 print:overflow-hidden">
          <StateContext.Provider value={resumeData}>
            <ThemeProvider theme={selectedTheme}>
              <Template />
            </ThemeProvider>
          </StateContext.Provider>
        </div>
      </div>
    </div>
  );
};
