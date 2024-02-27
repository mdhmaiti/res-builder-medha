/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useResumeStore } from 'src/stores/useResumeStore';
import {
  Column,
  ColumnBreak,
  Document,
  ImageRun,
  Packer,
  PageBreak,
  Paragraph,
  Tab,
  TextRun,
} from 'docx';
import { saveAs } from 'file-saver';
import { StyledButton } from '../atoms';
import { ISkillItem } from 'src/stores/skill.interface';
import { IVolunteeringItem } from 'src/stores/volunteering.interface';
import { useCallback, useEffect, useState } from 'react';

const DownloadAsWord = () => {
  const [base64Img, setBase64Img] = useState('');
  const {
    activities,
    awards,
    education,
    skills,
    volunteer,
    work,
    basics: {
      email,
      image,
      label,
      location,
      name,
      objective,
      phone,
      profiles,
      relExp,
      summary,
      totalExp,
      url,
    },
  } = useResumeStore();

  useEffect(() => {
    getBase64Img(image)
      .then((img) => {
        //@ts-ignore
        setBase64Img(img);
      })
      .catch((e) => console.log(e));
  }, [image]);

  const getBase64Img = async (image: string) => {
    try {
      const img = await fetch(image);
      const blob = await img.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const result = reader.result;
          resolve(result);
        };
      });
    } catch (e) {
      console.log(e);
    }
  };

  //////////////////////////////////////////////////////////////////////////

  const handleDownload = () => {
    const doc = new Document({
      numbering: {
        config: [
          {
            levels: [
              {
                level: 0,
                format: 'bullet',
                alignment: 'left',
              },
            ],
            reference: 'bulletList',
          },
        ],
      },
      styles: {
        paragraphStyles: [
          {
            id: 'headers',
            run: {
              underline: {
                type: 'thick',
                color: '#E5E7EB',
              },
              size: 24,
              bold: true,
            },
            paragraph: {
              thematicBreak: true,
              spacing: {},
            },
          },
        ],
        default: {
          document: {
            paragraph: {},
            run: {
              font: {
                name: 'Calibri',
              },
            },
          },
          heading1: {
            run: {
              size: 28,
              bold: true,
            },
            paragraph: {
              spacing: {},
              indent: {
                // left:100,
              },
            },
          },
          heading2: {
            run: {
              size: 24,
              bold: true,
            },
          },
        },
      },
      sections: [
        //section -> header
        {
          properties: {
            page: {
              margin: {
                left: 300,
                right: 300,
                top: 500,
                bottom: 100,
              },
            },
          },

          children: [
            new Paragraph({
              heading: 'Heading1',
              children: [
                new TextRun({
                  text: name,
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              text: label,

              run: {
                color: '#1890FF',
              },
            }),
            new Paragraph({
              run: {
                color: '#000000',
              },
              children: [
                new TextRun({
                  text: `${phone}  ${email}  ${location.city}  ${url}`,
                }),
                // new ImageRun({
                //   data: base64Img,
                //   transformation: {
                //     height: 80,
                //     width: 80,
                //   },
                //   floating: {
                //     horizontalPosition: {
                //       align: 'right',
                //       relative: 'column',
                //     },
                //     verticalPosition: {
                //       align: 'top',
                //       relative: 'margin',
                //     },
                //   },
                // }),
              ],
            }),
          ],
        },

        // first column
        {
          properties: {
            page: {
              margin: {
                left: 300,
                right: 300,
                top: 500,
                bottom: 100,
              },
            },
            column: {
              space: 708,
              count: 2,
              equalWidth: false,
              children: [
                new Column({
                  width: 720 * 10,
                  space: 200,
                }),
                new Column({
                  width: 720 * 5.5,
                  // space:200,
                }),
              ],
            },
            type: 'continuous',
          },
          children: [
            new Paragraph({
              children: [
                //Summary
                new TextRun({
                  break: 1,
                  underline: {
                    type: 'thick',
                    color: '#E5E7EB',
                  },
                  bold: true,
                  size: 24,
                  text: 'Summary',
                }),
                new TextRun({
                  break: 2,
                  text: summary,
                  size: 20,
                }),

                // Experience
                new TextRun({
                  break: 2,
                  text: 'Experience',
                  underline: {
                    type: 'thick',
                    color: '#E5E7EB',
                  },
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  children: [
                    ...work.map(
                      (w) =>
                        new TextRun({
                          children: [
                            new TextRun({
                              break: 2,
                              text: w.name,
                              size: 24,
                            }),
                            new TextRun({
                              break: 1,
                              text: w.position,
                              size: 24,
                              color: '#1890FF',
                            }),
                            new TextRun({
                              text: `  ${w.startDate}-${w.endDate || 'present'}`,
                            }),
                            new TextRun({
                              children: [
                                ...w.summary
                                  .split('<li>')
                                  .map((w) => w.replace(/<[^>]*>/g, ''))
                                  .filter((w) => w !== '')
                                  .map(
                                    (w) => (
                                      new Tab(),
                                      new TextRun({
                                        break: 1,
                                        size: 20,
                                        text: `•${w}`,
                                      })
                                    )
                                  ),
                              ],
                              // text: w.summary,
                            }),
                          ],
                        })
                    ),
                  ],
                }),
                //Awards
                new TextRun({
                  break: 2,
                  text: 'Awards',
                  underline: {
                    type: 'thick',
                    color: '#E5E7EB',
                  },
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  children: [
                    ...awards.map((award) => {
                      return new TextRun({
                        children: [
                          new TextRun({
                            break: 1.5,
                            size: 24,
                            text: award.title,
                          }),
                          new TextRun({
                            break: 1,
                            size: 24,
                            color: '#1890FF',
                            text: award.awarder,
                          }),
                          new TextRun({
                            text: `  ${award.date}`,
                          }),
                          new TextRun({
                            break: 1,
                            size: 20,
                            text: award.summary,
                          }),
                        ],
                      });
                    }),
                  ],
                }),

                // Column1 ends
                new ColumnBreak(),

                //Objective
                new TextRun({
                  break: 2,
                  text: 'Objective',
                  underline: {
                    type: 'thick',
                    color: '#E5E7EB',
                  },
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  break: 2,
                  text: objective,
                  size: 20,
                }),

                //skills
                new TextRun({
                  break: 2,
                  text: 'Languages',

                  underline: {
                    type: 'thick',
                    color: '#E5E7EB',
                  },
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  break: 2,
                  children: [
                    //@ts-ignore
                    ...skills.languages.map(
                      (tech: ISkillItem) =>
                        new TextRun({
                          text: `${tech.name}  `,
                          underline: {
                            type: 'thick',
                            color: '#E5E7EB',
                          },
                          size: 22,
                        })
                    ),
                  ],
                }),
                //Technologies
                new TextRun({
                  break: 2,
                  text: 'Technologies',
                  underline: {
                    type: 'thick',
                    color: '#E5E7EB',
                  },
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  break: 2,
                  children: [
                    //@ts-ignore

                    ...skills.technologies.map(
                      (lang: ISkillItem) =>
                        new TextRun({
                          text: `${lang.name}  `,
                          underline: {
                            type: 'thick',
                            color: '#E5E7EB',
                          },
                          size: 22,
                        })
                    ),
                  ],
                }),
                //Frameworks
                new TextRun({
                  break: 2,
                  text: 'Frameworks',
                  underline: {
                    type: 'thick',
                    color: '#E5E7EB',
                  },
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  break: 2,
                  children: [
                    //@ts-ignore

                    ...skills.frameworks.map(
                      (frame: ISkillItem) =>
                        new TextRun({
                          text: `${frame.name}  `,
                          underline: {
                            type: 'thick',
                            color: '#E5E7EB',
                          },
                          size: 22,
                        })
                    ),
                  ],
                }),

                //tools
                new TextRun({
                  break: 2,
                  text: 'Tools',
                  underline: {
                    type: 'thick',
                    color: '#E5E7EB',
                  },
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  break: 2,
                  children: [
                    //@ts-ignore

                    ...skills.tools.map(
                      (tool: ISkillItem) =>
                        new TextRun({
                          text: `${tool.name}  `,
                          underline: {
                            type: 'thick',
                            color: '#E5E7EB',
                          },
                          size: 22,
                        })
                    ),
                  ],
                }),
                //Education
                new TextRun({
                  break: 2,
                  text: 'Education',
                  underline: {
                    type: 'thick',
                    color: '#E5E7EB',
                  },
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  children: [
                    ...education.map(
                      (ed) =>
                        new TextRun({
                          children: [
                            new TextRun({
                              break: 2,
                              text: ed.area,
                              bold: true,
                              size: 24,
                            }),
                            new TextRun({
                              break: 1,
                              text: ed.institution,
                              size: 24,
                              color: '#1890FF',
                            }),
                            new TextRun({
                              snapToGrid: true,
                              text: `  ${ed.startDate}-${ed.endDate}`,
                            }),
                          ],
                        })
                    ),
                  ],
                }),

                // Volunteering
                new TextRun({
                  break: 2,
                  text: 'Volunteering',
                  underline: {
                    type: 'thick',
                    color: '#E5E7EB',
                  },
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  children: [
                    ...volunteer.map(
                      (vol: IVolunteeringItem) =>
                        new TextRun({
                          children: [
                            new TextRun({
                              break: 2,
                              text: vol.organization,
                              size: 24,
                              bold: true,
                            }),
                            new TextRun({
                              break: 1,
                              text: vol.position,
                              color: '#1890FF',
                            }),
                            new TextRun({
                              text: `   ${vol.startDate}-${vol.endDate}`,
                              size: 20,
                            }),
                            new TextRun({
                              break: 1,
                              text: vol.summary,
                            }),
                          ],
                        })
                    ),
                  ],
                }),
                //section ends
              ],
            }),
          ],
        },

        // next column starts
        {
          properties: {
            page: {
              margin: {
                left: 300,
                right: 500,
                top: 500,
                bottom: 100,
              },
            },
            column: {
              space: 708,
              count: 2,
            },
            type: 'nextColumn',
          },
          children: [
            //section/column ends
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'example.docx');
    });
  };
  return (
    <StyledButton
      onClick={handleDownload}
      variant="outlined"
      id="btn-export"
      className="bg-cyan-700"
    >
      Export as Word
    </StyledButton>
  );
};

export default DownloadAsWord;
