import React from 'react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { render } from '@testing-library/react';

describe('test testing', () => {
  it('render component', () => {
    const { container } = render(
      <div>
        <h1>Hello</h1>
      </div>
    );
    expect(container.querySelector('h1')).toHaveTextContent('Hello');
  });
});
