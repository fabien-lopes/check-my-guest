import { Themes } from '~/constants/global';

interface Theme {
  name: Themes;
  variables: {
    colorPrimary: string;
    colorSuccess: string;
    colorWarning: string;
    colorWarningGold: string;
    colorDisabled: string;
    colorDanger: string;
    colorWhite: string;
    colorNotSpecified: string;
  };
}

export const themes: { [key in Themes]: Theme } = {
  [Themes.Elegant]: {
    name: Themes.Elegant,
    variables: {
      colorPrimary: '#186763',
      colorSuccess: '#1FBFB8',
      colorWarning: '#ffb14b',
      colorWarningGold: '#c48501',
      colorDisabled: '#B2C6DD',
      colorDanger: '#FF4B5E',
      colorWhite: '#FFFFFF',
      colorNotSpecified: '#BF4FA0',
    },
  },
  [Themes.Technological]: {
    name: Themes.Technological,
    variables: {
      colorPrimary: '#4652C1',
      colorSuccess: '#1FBFB8',
      colorWarning: '#ffb14b',
      colorWarningGold: '#c48501',
      colorDisabled: '#B2C6DD',
      colorDanger: '#FF4B5E',
      colorWhite: '#FFFFFF',
      colorNotSpecified: '#BF4FA0',
    },
  },
};
