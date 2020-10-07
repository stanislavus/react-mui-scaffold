import React, { FunctionComponent } from 'react';

interface Props {
  a: number,
  b: number,
}

const Test: FunctionComponent<Props> = ({ a, b }: Props) => <div>{a + b}</div>;

export default () => (
  <>
    <div>Hello world from TypeScript</div>
    <Test a={1} b={2} />
  </>
);
