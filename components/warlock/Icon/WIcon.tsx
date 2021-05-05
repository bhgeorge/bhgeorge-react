import React, { FunctionComponent } from 'react';
import paths from './w-icon-paths.json';

type IconProps = {
  type: string,
};

const WIcon: FunctionComponent<IconProps> = ({ type }) => <svg
    className="h-4 w-4 inline-block"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    focusable="false"
    role="presentation"
  >
    <path 
      d={ paths[type] }
      className="fill-current"
    />
  </svg>

export default WIcon;