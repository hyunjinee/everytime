// import React from 'react';
// // import { action } from '@storybook/addon-actions';
// import Button from '.';

import React from 'react';
import Button from '.';

export default {
  title: 'Atoms / Button',
  component: Button,
};

export const Hello = () => <Button>Hello Button</Button>;

export const WithSomeEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

// export const
