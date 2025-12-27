import { ButtonHTMLAttributes } from 'react';
import * as React from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...rest
}) => (
  <Container onClick={() => onClick} type="button" {...rest}>
    {children}
  </Container>
);
