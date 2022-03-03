import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/styles/global';

// addDecorator((story) => (
//   <>
//     <GlobalStyle />
//     {story()}
//   </>
// ));

// export const decorators = [
//   (Story) => (
//     <>
//       <GlobalStyle />
//       {Story}
//     </>
//   ),
// ];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
