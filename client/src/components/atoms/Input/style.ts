import styled from 'styled-components';

interface Props {
  width?: number;
  height?: number;
}

export const Container = styled.input<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: #fff;
  outline: none;
`;
