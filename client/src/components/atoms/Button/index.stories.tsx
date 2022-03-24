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
