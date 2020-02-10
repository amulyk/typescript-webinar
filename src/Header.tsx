import React, { FC, ReactElement } from 'react';
import { useCounter } from './hooks/useCounter';

type Props = {
  title?: string;
  children?: never;
}

export const Header: FC<Props> = ({ title }: Props): ReactElement => {
  const content = typeof title === 'string' ? title.toLocaleLowerCase() : title;
  const { counter, increase, decrease } = useCounter();

  return (
    <>
      <h1>{ content }</h1>
      <h2>{ counter }</h2>
      <button type="button" onClick={increase}>+</button>
      <button type="button" onClick={decrease}>-</button>
    </>
  );
};

Header.defaultProps = {
  title: 'Hello!',
};
