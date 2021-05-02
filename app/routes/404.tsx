import * as React from 'react';
import type { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  return { title: "Ain't nothing here" };
};

export default function FourOhFour(): React.ReactElement {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
}