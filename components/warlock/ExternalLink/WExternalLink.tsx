import React, { FunctionComponent } from 'react';
import WIcon from '../Icon/WIcon';

type ExternalLinkProps = {
  href: string,
}

const ExternalLink: FunctionComponent<ExternalLinkProps> = ({ href, children }) => <a
    href={href}
    className="link underline"
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
    <span className="ml-0.5">
      <WIcon type="external" />
    </span>
  </a>

export default ExternalLink;