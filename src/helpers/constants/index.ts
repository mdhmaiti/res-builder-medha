import dynamic from 'next/dynamic';
import { IThemeColor, ITemplate } from './index.interface';

export const SYSTEM_COLORS: IThemeColor[] = [
  {
    backgroundColor: 'white',
    fontColor: 'black',
    titleColor: '#667eea',
    highlighterColor: 'yellowgreen',
    id: 1,
  },
  {
    backgroundColor: 'white',
    fontColor: '#780650',
    titleColor: '#ed8936',
    highlighterColor: 'burlywood',
    id: 2,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    titleColor: '#38b2ac',
    highlighterColor: '#F556E5',
    id: 3,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    titleColor: '#f56565',
    highlighterColor: '#F556E5',
    id: 4,
  },
  {
    backgroundColor: 'white',
    fontColor: 'black',
    titleColor: '#9f7aea',
    highlighterColor: 'yellowgreen',
    id: 5,
  },
  {
    backgroundColor: 'white',
    fontColor: '#780650',
    titleColor: '#ed64a6',
    highlighterColor: 'burlywood',
    id: 6,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    titleColor: '#4299e1',
    highlighterColor: '#F556E5',
    id: 7,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    titleColor: '#48bb78',
    highlighterColor: '#F556E5',
    id: 8,
  },
];

export const AVAILABLE_TEMPLATES: ITemplate = {
  modern: {
    id: 'modern',
    name: '',
    thumbnail: '/templates/modern.png',
    component: dynamic(() => import('src/templates/modern/MordernTemplate'), {
      ssr: false,
    }),
  },
  professional: {
    id: 'professional',
    name: '',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('src/templates/professional/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
};

export const CUSTOM_THEME_COLOR: IThemeColor = {
  backgroundColor: 'white',
  fontColor: 'black',
  titleColor: 'green',
  highlighterColor: '#ff7875',
  id: 9,
};

export const DATE_PICKER_FORMAT = 'DD/MM/YYYY';
