import { useCallback, useEffect, useState } from 'react';

import { StyledButton } from '../atoms';
import { IoMdDownload } from 'react-icons/io';
import saveAs from 'file-saver';
//import StyleModule from 'docxtemplater-style-module';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import { useActivity } from 'src/stores/activity';
import { useAwards } from 'src/stores/awards';
import { useBasicDetails } from 'src/stores/basic';
import { useEducations } from 'src/stores/education';
import { useExperiences } from 'src/stores/experience';
import {
  useLanguages,
  useFrameworks,
  useTechnologies,
  useLibraries,
  useDatabases,
  usePractices,
  useTools,
} from 'src/stores/skills';
import { useVoluteeringStore } from 'src/stores/volunteering';
import DEFAULT_RESUME_JSON from 'src/helpers/constants/resume-data.json';

let PizZipUtils: any = null;
if (typeof window !== 'undefined') {
  import('pizzip/utils/index.js').then(function (r) {
    PizZipUtils = r;
  });
}

function loadFile(url: string, callback: any) {
  PizZipUtils.getBinaryContent(url, callback);
}

function generateDocument() {
  loadFile('/Untitled2.docx', function (error: string, content: PizZip.LoadData) {
    if (error) {
      throw error;
    }
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      linebreaks: true,
      paragraphLoop: true,
    });
    const updatedResumeJson = {
      ...DEFAULT_RESUME_JSON,
      basics: {
        ...DEFAULT_RESUME_JSON.basics,
        ...useBasicDetails.getState().values,
      },
      work: useExperiences.getState().experiences,
      education: useEducations.getState().academics,
      awards: useAwards.getState().awards,
      volunteer: useVoluteeringStore.getState().volunteeredExps,
      skills: {
        languages: useLanguages.getState().get(),
        frameworks: useFrameworks.getState().get(),
        technologies: useTechnologies.getState().get(),
        libraries: useLibraries.getState().get(),
        databases: useDatabases.getState().get(),
        practices: usePractices.getState().get(),
        tools: useTools.getState().get(),
      },
      activities: useActivity.getState().activities,
    };
    // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)

    // doc x templater does not allow anyone to render the html tag in free version
    // it gives undefined when try to render the html tag eg : {~~summary} is is the way to render the tags(according to docs)
    doc.render({
      name: updatedResumeJson.basics.name,
      label: updatedResumeJson.basics.label,
      phone: updatedResumeJson.basics.phone,
      email: updatedResumeJson.basics.email,
      city: updatedResumeJson.basics.location.city,
      summary: updatedResumeJson.basics.summary,
      objective: updatedResumeJson.basics.objective,
      work: updatedResumeJson.work,
      awards: updatedResumeJson.awards,
      languages: updatedResumeJson.skills.languages,
      technologies: updatedResumeJson.skills.technologies,
      frameworks: updatedResumeJson.skills.frameworks,
      tools: updatedResumeJson.skills.tools,
      education: updatedResumeJson.education,
      volunteer: updatedResumeJson.volunteer,
    });
    const blob = doc.getZip().generate({
      type: 'blob',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
    // Output the document using Data-URI
    saveAs(blob, 'output.docx');
  });
}

export const ExportAsDocx = () => {
  const [elementVal, setTextContent] = useState('false');

  useEffect(() => {
    const element = document.getElementById('source-html');
    if (element) {
      setTextContent(element.innerHTML);
    }
  }, []);

  const onDownloadDocxClicked = useCallback(async () => {
    generateDocument();
  }, []);

  return (
    <StyledButton
      variant="outlined"
      id="btn-export"
      className="bg-cyan-700"
      // onClick={() => {
      //   const header =
      //     "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      //     "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      //     "xmlns='http://www.w3.org/TR/REC-html40'>" +
      //     "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
      //   const footer = '</body></html>';
      //   const sourceHTML = header + elementVal + footer;
      //   const source =
      //     'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
      //   const fileDownload = document.createElement('a');
      //   document.body.appendChild(fileDownload);
      //   fileDownload.href = source;
      //   fileDownload.download = 'document.doc';
      //   fileDownload.click();
      //   document.body.removeChild(fileDownload);
      // }}
      onClick={() => onDownloadDocxClicked()}
    >
      Export as Docx
    </StyledButton>
  );
};
